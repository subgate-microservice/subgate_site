# Webhook management

- [Create](#create)
    - [Create webhook](#create-webhook)
- [Retrieve](#retrieve)
    - [Get webhook by id](#get-webhook-by-id)
    - [Get all webhooks](#get-all-webhooks)
- [Update](#update)
    - [Update webhook](#update-webhook)
- [Delete](#delete)
    - [Delete webhook by id](#delete-webhook-by-id)
    - [Delete all webhooks](#delete-all-webhooks)

## Create

### Create webhook

<!-- CODE: test_create_webhook -->

```python
from subgatekit import EventCode, Webhook

webhook = Webhook(
    event_code=EventCode.SubCreated,
    target_url="http://my-site.com",
)
client.webhook_client().create(webhook)
```

<!-- END CODE -->

## Retrieve

### Get webhook by id

<!-- CODE: test_get_webhook_by_id -->

```python
from uuid import UUID

target_id: UUID = fake_webhook.id
webhook = client.webhook_client().get_by_id(target_id)
```

<!-- END CODE -->

### Get all webhooks

<!-- CODE: test_get_all_webhooks -->

```python
webhooks = client.webhook_client().get_all()
```

<!-- END CODE -->

## Update

### Update webhook

<!-- CODE: test_update_webhook -->

```python
from uuid import UUID
from subgatekit import EventCode

target_id: UUID = fake_webhook.id
webhook = client.webhook_client().get_by_id(target_id)

webhook.target_url = "http://updated-site.com"
webhook.event_code = EventCode.SubExpired
client.webhook_client().update(webhook)
```

<!-- END CODE -->

## Delete

### Delete webhook by id

<!-- CODE: test_delete_webhook_by_id -->

```python
from uuid import UUID

target_id: UUID = fake_webhook.id
client.webhook_client().delete_by_id(target_id)
```

<!-- END CODE -->

### Delete all webhooks

<!-- CODE: test_delete_all_webhooks -->

```python
client.webhook_client().delete_all()
```

<!-- END CODE -->
