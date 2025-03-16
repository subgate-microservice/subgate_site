# Installation

Follow the steps below to install and run the Subgate Microservice:

```bash
git clone https://github.com/subgate-microservice/subgate.git
cd subgate
docker compose up --build
```

That's it! Once the service is running, you can access the following:

## Admin Panel

- **URL:** [http://localhost](http://localhost)
- **Description:** A user-friendly interface for managing plans and subscriptions manually. Create an account on your
  first sign-in or use the test credentials: `test@test.com:qwerty`

## API Endpoints

- **URL:** [http://localhost:3000/api/v1](http://localhost:3000/api/v1)
- **Description:** Use these endpoints to integrate your application with the Subgate Microservice.

**PS.** If you're using Python, an official client is available for easier integration.

## API Documentation

- **URL:** [http://localhost:3000/api/v1/#docs](http://localhost:3000/api/v1/#docs)
- **Description:** Comprehensive documentation for all available API endpoints.
