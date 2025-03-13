# Subscription management

- [Create](#create)
    - [Create a simple subscription](#create-a-simple-subscription)
    - [Create a usage-based subscription](#create-a-usage-based-subscription)
    - [Create a subscription with custom fields](#create-a-subscription-with-custom-fields)
    - [Status conflict resolution](#status-conflict-resolution)
- [Retrieve](#retrieve)
    - [Get current subscription](#get-current-subscription)
    - [Get subscription by id](#get-subscription-by-id)
    - [Get all subscriptions](#get-all-subscriptions)
    - [Get selected subscriptions](#get-selected-subscriptions)
- [Update](#update)
    - [Pause subscription](#pause-subscription)
    - [Resume subscription](#resume-subscription)
    - [Renew subscription](#renew-subscription)
    - [Increase & Decrease usage](#increase--decrease-usage)
    - [Update usages](#update-usages)
    - [Add usages](#add-usages)
    - [Remove usages](#remove-usages)
- [Delete](#delete)
    - [Delete subscription by id](#delete-subscription-by-id)
    - [Delete all subscriptions](#delete-all-subscriptions)
    - [Delete selected subscriptions](#delete-selected-subscriptions)

## Create

### Create a simple subscription

To create a simple ```Subscription```, you need the following:

1. Target Subscriber ID
2. Subscription plan details

<!-- CODE: test_create_subscription -->

```python
from subgatekit import Period, Plan, Subscription

personal_plan = Plan('Personal', 30, 'USD', Period.Quarterly)
subscription = Subscription.from_plan(personal_plan, 'AnySubscriberID')
client.subscription_client().create(subscription)

created = client.subscription_client().get_by_id(subscription.id)
```

<!-- END CODE -->
**Important!**  
In some cases, the status of a created subscription may differ. For example, if a new subscription is created while an
active one already exists, the subscription with the inferior plan level will be paused. We strongly recommend
retrieving the latest version to avoid data inconsistencies.

### Create a usage-based subscription

To create a usage-based subscription, you can follow one of two approaches:

1. Create a plan with `UsageRates` and then create a subscription based on it. This approach is suitable if you want all
   subscriptions to have the same usage rates.
2. Create a subscription and directly add the necessary `Usage`. This approach is suitable if you want to set limits
   for a specific subscription.

<!-- CODE: test_create_usage_based_subscription -->

```python
import datetime
from subgatekit import Period, UsageRate, Plan, Subscription, Usage

# Create from plan
rates = [
    UsageRate(
        title='Api Call',
        code='api_call',
        unit='call',
        available_units=1_000,
        renew_cycle=Period.Daily,
    ),
]
personal_plan = Plan('Personal', 30, 'USD', Period.Quarterly, usage_rates=rates)
subscription = Subscription.from_plan(personal_plan, 'AnySubscriberID')
client.subscription_client().create(subscription)

# Or directly usage management
plan_without_usages = Plan('Simple', 50, 'USD', Period.Monthly)
subscription = Subscription.from_plan(plan_without_usages, 'AnotherSubscriber')
subscription.usages.add(
    Usage(
        title='Storage Usage',
        code='storage_usage',
        unit='GB',
        available_units=100,
        renew_cycle=Period.Lifetime,
        used_units=0,
        last_renew=datetime.datetime.now(datetime.UTC),
    )
)
client.subscription_client().create(subscription)
```

<!-- END CODE -->

### Create a subscription with custom fields

The same logic applies as with `Plan.fields`: you can store any key-value structure as long as it is
JSON-serializable.

<!-- CODE: test_create_subscription_with_custom_fields -->

```python
from subgatekit import Period, Plan, Subscription

plan = Plan('Business', 100, 'USD', Period.Annual)

fields = {
    'key1': 'value1',
    'key2': {
        'inner_key1': 22,
        'inner_key2': 'Hello world!',
    },
}

subscription = Subscription.from_plan(plan, 'AnySubscriberID', fields=fields)
client.subscription_client().create(subscription)
```

<!-- END CODE -->

### Status conflict resolution

When creating a subscription for a subscriber, it’s possible that another active subscription already exists (e.g., a
subscriber already has a `Personal` plan and is purchasing a `Business` plan). Having two active subscriptions
charging
simultaneously can create a poor user experience. To prevent this, Subgate applies the following logic:

- A subscriber can have only one subscription with an `Active` status at a time.
- If the new subscription has a higher plan level, the existing active subscription will be paused. Once the new
  subscription expires, the previously active subscription will automatically resume.
- If the new subscription has the same or a lower plan level, it will be created in a paused state. When the main (
  higher-level)
  subscription expires, the newly created subscription will automatically resume.

## Retrieve

### Get current subscription

The most common use case is retrieving the `Active` subscription for a specific subscriber.
The ```SubgateClient``` provides a dedicated method for this operation:

<!-- CODE: test_get_current_subscription -->

```python
# Returns None if there is no active subscription
sub = client.subscription_client().get_current_subscription('AnySubscriberID')
```

<!-- END CODE -->

### Get subscription by id

<!-- CODE: test_get_subscription_by_id -->

```python
from uuid import UUID

target_id: UUID = fake_sub.id
subscription = client.subscription_client().get_by_id(target_id)
```

<!-- END CODE -->

### Get all subscriptions

<!-- CODE: test_get_all_subscriptions -->

```python
subscriptions = client.subscription_client().get_selected(
    order_by=[('created_at', 1)],
    skip=0,
    limit=100,
)
```

<!-- END CODE -->

### Get selected subscriptions

<!-- CODE: test_get_selected_subscriptions -->

```python
subscriptions = client.subscription_client().get_selected(
    ids=None,  # UUID | Iterable[UUID]
    subscriber_ids=None,  # str | Iterable[str]
    statuses=None,  # SubscriptionStatus | Iterable[SubscriptionStatus]
    expiration_date_lt=None,  # datetime with tz_info
    expiration_date_lte=None,  # datetime with tz_info
    expiration_date_gt=None,  # datetime with tz_info
    expiration_date_gte=None,  # datetime with tz_info
    order_by=[('created_at', 1)],
    skip=0,
    limit=100,
)
```

<!-- END CODE -->

## Update

### Pause subscription

Sets the subscription status to `Paused` and `Subscription.paused_from` to current datetime. Raises an error if the
status is `Expired`.

<!-- CODE: test_pause_subscription -->

```python
from uuid import UUID

target_id: UUID = fake_sub.id

subscription = client.subscription_client().get_by_id(target_id)
subscription.pause()

client.subscription_client().update(subscription)
```

<!-- END CODE -->

### Resume subscription

Sets the subscription status to `Active` and resets `Subscription.paused_from` to None. May also update
`Subscription.billing_info.saved_days`. Raises an error if the status is `Expired` or if another subscription
with an `Active` status already exists.

<!-- CODE: test_resume_subscription -->

```python
from uuid import UUID

target_id: UUID = fake_sub.id

subscription = client.subscription_client().get_by_id(target_id)
subscription.resume()

client.subscription_client().update(subscription)
```

<!-- END CODE -->

### Renew subscription

Changes subscription status into `Active` and subscription last billing date into `from_date` argument (or current
datetime if argument is not provided). Throw error if another active subscription exists.

<!-- CODE: test_renew_subscription -->

```python
from uuid import UUID

target_id: UUID = fake_sub.id

subscription = client.subscription_client().get_by_id(target_id)
subscription.renew(from_date=None)

client.subscription_client().update(subscription)
```

<!-- END CODE -->

### Increase & Decrease usage

Simple way for managing usage-based subscriptions.

<!-- CODE: test_adjust_usage -->

```python
from uuid import UUID

target_id: UUID = fake_sub_with_usages.id
subscription = client.subscription_client().get_by_id(target_id)

# Check usage is zero
assert subscription.usages.get('api_call').used_units == 0

# Increasing and decreasing usages
subscription.usages.get('api_call').increase(20)
subscription.usages.get('api_call').increase(80)
subscription.usages.get('api_call').increase(-10)
client.subscription_client().update(subscription)

# Check result
updated = client.subscription_client().get_by_id(subscription.id)
assert updated.usages.get('api_call').used_units == 90
```

<!-- END CODE -->

### Update usages

<!-- CODE: test_update_usages -->

```python
from uuid import UUID
from subgatekit import Usage, Period

target_id: UUID = fake_sub_with_usages.id
subscription = client.subscription_client().get_by_id(target_id)

# Update
subscription = client.subscription_client().get_by_id(subscription.id)
subscription.usages.update(
    Usage(
        title='Updated title',
        code='api_call',
        unit='request',
        used_units=30,
        available_units=10_000,
        renew_cycle=Period.Monthly,
    )
)
client.subscription_client().update(subscription)
```

<!-- END CODE -->

### Add usages

<!-- CODE: test_add_usages -->

```python
from uuid import UUID

from subgatekit import Usage, Period

target_id: UUID = fake_sub.id
subscription = client.subscription_client().get_by_id(target_id)
subscription.usages.add(
    Usage(
        title='API Call',
        code='api_call',
        unit='request',
        available_units=1_000,
        used_units=0,
        renew_cycle=Period.Daily,
    )
)

client.subscription_client().update(subscription)
```

<!-- END CODE -->

### Remove usages

<!-- CODE: test_remove_usages -->

```python
from uuid import UUID

target_id: UUID = fake_sub_with_usages.id
subscription = client.subscription_client().get_by_id(target_id)

subscription.usages.remove('api_call')
client.subscription_client().update(subscription)
```

<!-- END CODE -->

## Delete

### Delete subscription by id

<!-- CODE: test_delete_subscription_by_id -->

```python
from uuid import UUID

target_id: UUID = fake_sub.id
client.subscription_client().delete_by_id(target_id)
```

<!-- END CODE -->

### Delete all subscriptions

<!-- CODE: test_delete_all_subscriptions -->

```python
client.subscription_client().delete_selected()
```

<!-- END CODE -->

### Delete selected subscriptions

<!-- CODE: test_delete_selected_subscriptions -->

```python
# From python
client.subscription_client().delete_selected(
    ids=None,  # UUID | Iterable[UUID]
    subscriber_ids=None,  # str | Iterable[str]
    statuses=None,  # SubscriptionStatus | Iterable[SubscriptionStatus]
    expiration_date_gt=None,  # datetime with tz_info
    expiration_date_gte=None,  # datetime with tz_info
    expiration_date_lt=None,  # datetime with tz_info
    expiration_date_lte=None,  # datetime with tz_info
)
```

<!-- END CODE -->