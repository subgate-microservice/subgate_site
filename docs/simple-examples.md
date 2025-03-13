# Simple examples

## Create plan

<!-- CODE: test_create_plan -->

```python
from subgatekit import Period, Plan

plan = Plan(
    title='Business',
    price=100,
    currency='USD',
    billing_cycle=Period.Monthly,
)

client.plan_client().create(plan)
```

<!-- END CODE -->

## Create subscription

<!-- CODE: test_create_subscription -->

```python
from subgatekit import Period, Plan, Subscription

plan = Plan('Business', 100, 'USD', Period.Monthly)
sub = Subscription.from_plan(plan, 'AnySubscriberID')

client.subscription_client().create(sub)
```

<!-- END CODE -->

## Check subscription

<!-- CODE: test_check_subscription -->

```python

async def check_subscription(current_user):
    sub = await client.subscription_client().get_current_subscription(
        str(current_user.id)
    )
    if sub is None:
        raise PermissionError
        
app = FastAPI()

@app.get('/')
async def protected_route(current_user=Depends(your_auth_closure)):
    await check_subscription(current_user)
    print('Access to protected route')
    return 'Ok'

```

<!-- END CODE -->

