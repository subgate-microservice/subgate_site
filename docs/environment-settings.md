# Environment settings

## Environment file

```ini
# Database configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=myuser
DB_PASSWORD=mypassword
DB_NAME=mydatabase
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