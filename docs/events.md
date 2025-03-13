# Events

## Available events

| Event                | Payload                                     | Comment                                                           |
|----------------------|---------------------------------------------|-------------------------------------------------------------------|
| plan_created         | [Plan](#plan)                               | Sent after a plan is created.                                     |
| plan_deleted         | [Plan](#plan)                               | Sent after a plan is deleted.                                     |
| plan_updated         | [PlanUpdated](#planupdated)                 | Sent after a plan is updated.                                     |
| sub_created          | [Subscription](#subscription)               | Sent after a subscription is created.                             |
| sub_deleted          | [Subscription](#subscription)               | Sent after a subscription is deleted.                             |
| sub_updated          | [SubscriptionUpdated](#subscriptionupdated) | Sent after any changes in the subscription have occurred.         |
| sub_paused           | [SubscriptionPaused](#subscriptionpaused)   | Sent after a subscription is paused.                              |
| sub_resumed          | [SubscriptionResumed](#subscriptionresumed) | Sent after a subscription is resumed.                             |
| sub_renewed          | [SubscriptionRenewed](#subscriptionrenewed) | Sent after a subscription is renewed.                             |
| sub_expired          | [SubscriptionExpired](#subscriptionexpired) | Sent after a subscription is expired.                             |
| sub_usage_added      | [Usage](#usage)                             | Sent after Usage was added to the subscription.                   |
| sub_usage_removed    | [Usage](#usage)                             | Sent after a subscription Usage was deleted.                      |
| sub_usage_updated    | [UsageUpdated](#usageupdated)               | Sent after any changes of the subscription Usage was occurred.    |
| sub_discount_added   | [Discount](#discount)                       | Sent after Discount was added to the subscription.                |
| sub_discount_removed | [Discount](#discount)                       | Sent after a subscription Discount was deleted.                   |
| sub_discount_updated | [DiscountUpdated](#discountupdated)         | Sent after any changes of the subscription Discount was occurred. |

## Event example

```json
{
  "type": "event",
  "code": "sub_created",
  "occurred_at": "2025-01-27T14:30:00+03:00",
  "payload": {
    "id": "8328c4b4-fa07-497b-9480-437559b8b136",
    "subscriber_id": "AnySubscriberID",
    "price": 100,
    "currency": "USD",
    "billing_cycle": "annual"
  }
}
```

## Payload examples

### Plan

```json
{
  "id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "title": "Business",
  "price": 100,
  "currency": "USD",
  "billing_cycle": "monthly"
}
```

### PlanUpdated

```json
{
  "id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "changes": {
    "title": "Updated title",
    "price": 300,
    "usage_rates.request": "action:added",
    "discounts.black_friday": "action:updated"
  }
}
```

### Subscription

```json
{
  "id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "subscriber_id": "AnySubscriberID",
  "status": "active",
  "price": 100,
  "currency": "USD",
  "billing_cycle": "annual"
}
```

### SubscriptionUpdated

```json
{
  "id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "subscriber_id": "AnySubscriberID",
  "changes": {
    "billing_info.price": 200,
    "usages.first": "action:added",
    "usages.second": "action:updated",
    "discounts.third": "action:removed"
  }
}
```

### SubscriptionPaused

```json
{
  "id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "subscriber_id": "AnySubscriberID"
}
```

### SubscriptionResumed

```json
{
  "id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "subscriber_id": "AnySubscriberID",
  "saved_days": 10
}
```

### SubscriptionRenewed

```json
{
  "id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "subscriber_id": "AnySubscriberID",
  "last_billing": "2025-01-27T14:30:00+03:00"
}
```

### SubscriptionExpired

```json
{
  "id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "subscriber_id": "AnySubscriberID"
}
```

### Usage

```json
{
  "subscription_id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "title": "API Call",
  "code": "api_call",
  "unit": "request",
  "available_units": 1000,
  "renew_cycle": "weekly",
  "used_units": 0,
  "last_renew": "2025-01-27T14:30:00+03:00"
}
```

### UsageUpdated

```json
{
  "subscription_id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "code": "api_call",
  "changes": {
    "used_units": 50
  },
  "delta": 50
}
```

### Discount

```json
{
  "subscription_id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "title": "Black Friday",
  "code": "black",
  "description": "Any description",
  "size": 0.3,
  "valid_until": "2025-01-27T14:30:00+03:00"
}
```

### DiscountUpdated

```json
{
  "subscription_id": "8328c4b4-fa07-497b-9480-437559b8b136",
  "code": "black",
  "changes": {
    "size": 0.5
  }
}
```