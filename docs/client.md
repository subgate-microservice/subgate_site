# Subgate Client

The client simplifies interaction with the Subgate API, offering both synchronous and asynchronous realisations.
Currently, only a Python client is available.

## Installation

Install the client using pip:

```bash
pip install httpx
pip install subgatekit
```

## Client instance

Apikey for test user was automatically created.

<!-- CODE: test_instances -->

```python
from subgatekit import SubgateClient, AsyncSubgateClient

client = SubgateClient(
    base_url='http://localhost:3000/api/v1',
    apikey_public_id='TEST_APIKEY_PUBLIC_ID',
    apikey_secret='TEST_APIKEY_VALUE',
)

async_client = AsyncSubgateClient(
    base_url='http://localhost:3000/api/v1',
    apikey_public_id='TEST_APIKEY_PUBLIC_ID',
    apikey_secret='TEST_APIKEY_VALUE',
)
```

<!-- END CODE -->