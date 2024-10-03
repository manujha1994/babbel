# Babbel email guesser service backend

## Overview

The Email Guesser backend is built with Node.js and provides an API for deriving email addresses based on user input. This project follows a modular structure, making it easy to maintain and extend.

## Architecture

The project follows a **modular architecture**, ensuring clean separation of concerns and scalability. Each feature and responsibility is encapsulated within its respective directory, providing an organized structure for easier maintenance and extensibility.

### 1. **Controllers**
- Controllers are responsible for handling incoming HTTP requests and sending appropriate responses.
- Each controller encapsulates the logic to process requests and interact with the necessary services.

### 2. **Services**
- Services handle the business logic of the application, such as email derivation and validation.
- They are used by controllers to process the input data and return the required results.

### 3. **Routes**
- Routes map incoming HTTP requests to the appropriate controller methods.
- This structure allows for clear and organized endpoint management, making it easy to add new routes.

### 4. **Data**
- The `data` directory contains any necessary static data (e.g., `sampleData.json`) that the application may use to derive email addresses.

### 5. **Utilities**
- Utility files contain helper functions and shared logic, such as error messages and logging utilities, that are reused throughout the application.

### 6. **Types**
- TypeScript type definitions are organized within the `types` directory.
- These types ensure that the application maintains strong typing, improving reliability and reducing bugs.

### 7. **Testing**
- Tests are organized at the root level in a `tests` directory, with each test corresponding to the service or functionality being tested.

## Directory Structure

```
babbel-service/
│
├── src/
│   ├── controllers/            # Contains tests for various components of the backend
│   │   └── EmailController.ts  # Handles incoming requests related to email operations
│   │
│   ├── data/
│   │   └── sampleData.json     # Contains sample data of emails
│   │
│   ├── routes/
│   │   ├── emailRoutes.ts      # Defines routes for email-related operations
│   │   └── index.ts            # Main routing file to combine all routes
│   │
│   ├── services/
│   │   ├── EmailService.ts     # Service for handling email-related logic
│   │   └── Validator.ts        # Contains validation logic for input data
│   │
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions used throughout the project
│   │
│   └── utils/
│       ├── errorMessages.ts    # Contains error messages for consistent error handling
│       └── logger.ts           # Logger utility for logging messages and errors
│
└── tests/                      # Contains tests for various components of the backend
    └── EmailService.test.ts    # Tests for EmailService

```

## Environment Configuration

To configure the project, create a `.env` file in the root directory and include the following parameters:

```plaintext
# Port for running the backend server
PORT=3001 

# Development environment
NODE_ENV=development
```

## Running the backend

### Prerequisites

- Node.js (v18.20.4 or higher)
- npm (v10.7.0 or higher)

### `npm install`

Install the packages present in package.json file.

### `npm run dev`
Runs the server on port 3001 by default.\
Make a get request to [http://localhost:3001/healthcheck](http://localhost:3001/healthcheck) to verify the health of the service.\
A `ok` response is returned when the service is up.

### `npm test`

Run the tests and check the results.

### `npm run build`

Builds the backend for production in the `dist` folder.
