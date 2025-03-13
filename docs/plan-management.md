# Plan management

- [Create](#create)
    - [Create simple plan](#create-simple-plan)
    - [Create plan with usage rates](#create-plan-with-usage-rates)
    - [Create plan with discounts](#create-plan-with-discounts)
    - [Create plan with custom fields](#create-plan-with-custom-fields)
- [Retrieve](#retrieve)
    - [Get plan by id](#get-plan-by-id)
    - [Get all plans](#get-all-plans)
    - [Get selected plans](#get-selected-plans)
- [Update](#update)
    - [Update plan](#update-plan)
- [Delete](#delete)
    - [Delete plan by id](#delete-plan-by-id)
    - [Delete all plans](#delete-all-plans)
    - [Delete selected plans](#delete-selected-plans)

## Create

### Create simple plan

<!-- CODE: test_create_simple_plan -->

```python
from subgatekit import Period, Plan

personal_plan = Plan(
    title='Personal',
    price=30,
    currency='USD',
    billing_cycle=Period.Quarterly,
    description='This is a personal plan description',
    level=10,
    features='Any features you want to describe',
)

business_plan = Plan(
    title='Business',
    price=200,
    currency='USD',
    billing_cycle=Period.Annual,
    description='This is a business plan description',
    level=20,
    features='Any features you want to describe',
)

client.plan_client().create(personal_plan)
client.plan_client().create(business_plan)
```

<!-- END CODE -->

The level attribute represents a metric for defining the hierarchy of plans.
For example, a `Business` plan with level=20 is superior to a `Personal` plan with level=10.
When an active subscription expires, Subgate Microservice automatically searches for other subscriptions with a `Paused`
status.
If multiple subscriptions are found, the one associated with the plan that has the highest level will be resumed.

### Create plan with usage rates

Sometimes, you may need to create plans (and subscriptions) that combine time-based limitations with usage-based
restrictions, such as API calls. Additionally, the renewal cycles for usage limits can differ from the core
subscription's billing cycle. To automatically create subscriptions with usage restrictions, you can define
a `UsageRate`
in your plan.

<!-- CODE: test_create_plan_with_usage_rates -->

```python
from subgatekit import UsageRate, Period, Plan

usage_rates = [
    UsageRate(
        title='Storage',
        code='storage',
        unit='GB',
        available_units=100,
        renew_cycle=Period.Lifetime,
    ),
    UsageRate(
        title='API Calls',
        code='api_calls',
        unit='CALL',
        available_units=10_000,
        renew_cycle=Period.Daily,
    ),
]

plan = Plan('Personal', 30, 'USD', Period.Quarterly, usage_rates=usage_rates)
client.plan_client().create(plan)
```

<!-- END CODE -->

### Create plan with discounts

<!-- CODE: test_create_plan_with_discounts -->

```python
import datetime
from subgatekit import Discount, Period, Plan

discounts = [
    Discount(
        title='Black friday',
        code='black',
        size=0.3,  # Percentage (min=0, max=1)
        valid_until=datetime.datetime.now(tz=datetime.UTC),
    ),
]

plan = Plan('Personal', 30, 'USD', Period.Quarterly, discounts=discounts)
client.plan_client().create(plan)
```

<!-- END CODE -->

### Create plan with custom fields

If you have specific requirements, there's a special property in the plan called `fields`. This property allows
storing any key-value structure that can be serialized.


<!-- CODE: test_create_plan_with_custom_fields -->

```python
from subgatekit import Period, Plan

fields = {
    'my_specific_field': 1,
    'any_list_data': ['Hello', 'World!'],
    'any_dict_data': {
        'property1': 1,
        'property2': 2,
    },
}

plan = Plan('Personal', 30, 'USD', Period.Quarterly, fields=fields)
client.plan_client().create(plan)
```

<!-- END CODE -->

## Retrieve

### Get plan by id

<!-- CODE: test_get_plan_by_id -->

```python
from uuid import UUID

target_id: UUID = fake_plan.id
plan = client.plan_client().get_by_id(target_id)
```

<!-- END CODE -->

### Get all plans

<!-- CODE: test_get_all_plans -->

```python
plans = client.plan_client().get_selected(
    order_by=[('created_at', 1)],
    skip=0,
    limit=100,
)
```

<!-- END CODE -->

### Get selected plans

<!-- CODE: test_get_selected_plans -->

```python
plans = client.plan_client().get_selected(
    ids=None,  # UUID | Iterable[UUID]
    order_by=[('created_at', 1)],
    skip=0,
    limit=100,
)
```

<!-- END CODE -->

## Update

### Update plan

<!-- CODE: test_update_plan -->

```python
from subgatekit import Period, Plan

# Create
plan = Plan('Personal', 30, 'USD', Period.Quarterly)
client.plan_client().create(plan)

# Update
plan.price = 100
plan.currency = 'EUR'
client.plan_client().update(plan)
```

<!-- END CODE -->

## Delete

### Delete plan by id

<!-- CODE: test_delete_plan_by_id -->

```python
from uuid import UUID

target_id: UUID = fake_plan.id
client.plan_client().delete_by_id(target_id)
```

<!-- END CODE -->

### Delete all plans

<!-- CODE: test_delete_all_plans -->

```python
client.plan_client().delete_selected()
```

<!-- END CODE -->

### Delete selected plans

<!-- CODE: test_delete_selected_plans -->

```python
client.plan_client().delete_selected(
    ids=None,  # UUID | Iterable[UUID]
)
```

<!-- END CODE -->