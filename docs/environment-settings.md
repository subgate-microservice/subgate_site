# Environment settings

## Environment file

```ini
# Database
DB_NAME=subgate
DB_USER=postgres
DB_PASSWORD=qwerty
DB_HOST=localhost
DB_PORT=5432

# Server settings
HOST=0.0.0.0
PORT=3000

# First user
USER_EMAIL=test@test.com
USER_PASSWORD=qwerty
USER_APIKEY_TITLE=Test apikey
USER_APIKEY_PUBLIC_ID=apikey_test_id
USER_APIKEY_SECRET=test_secret

# Authentication settings
AUTHENTICATION_CACHE_TIME=3600
AUTHENTICATION_TOKEN_LIFETIME=86_400
SECRET=sample_secret

# Subscription manager
SUBSCRIPTION_MANAGER_CHECK_PERIOD=3600
SUBSCRIPTION_MANAGER_BULK_LIMIT=100

# Cleaners
LOG_RETENTION_DAYS=7
DELIVERY_RETENTION_DAYS=7

```

## Docker compose

```yaml
services:
  backend-server:
    build:
      context: ./backend
      dockerfile: Dockerfile
    env_file:
      - .env
    depends_on:
      - postgres
    ports:
      - "3000:3000"

  frontend-server:
    build:
      context: ./front
      dockerfile: Dockerfile
    env_file:
      - .env
    depends_on:
      - backend-server
    ports:
      - "80:5000"

  postgres:
    image: postgres:alpine
    env_file:
      - .env
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```