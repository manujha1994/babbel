# Babbel email guesser service frontend

## Overview

The Email Guesser frontend is a React-based Single Page Application (SPA) designed to derive 
email addresses based on user input (full name and company domain) using existing data. 
It features a clean, responsive, user-friendly interface for inputting data and receiving email results.


## Architecture

The project follows a **modular architecture**, promoting separation of concerns, maintainability, and extensibility. Below are the key components of the architecture:

### 1. **Modules**
- Each module represents a distinct feature or part of the application, encapsulating related components, services, and types.
- Example: The `home` module contains all components and services related to the home page, allowing for easy updates and enhancements without affecting other modules.

### 2. **Components**
- Reusable UI components are organized within their respective modules and can also be found in shared directories.
- Components are designed to be self-contained and easily composable, facilitating reuse throughout the application.

### 3. **API Layer**
- Each module has an `api` directory for handling network requests, ensuring that API-related logic is encapsulated within the module.
- This separation allows for easier updates and testing of API calls specific to each feature.

### 4. **Routing**
- A centralized routing system manages navigation within the application, promoting a clear and organized structure.
- Routes are defined in a dedicated `routes` directory, making it easy to add, modify, or remove routes as the application evolves.

### 5. **Shared Utilities**
- Common utilities and components that can be reused across different modules are organized in a shared directory.
- This promotes code reuse and consistency throughout the application.

### 6. **Testing**
- Each component has associated tests located in a `__tests__` folder within the respective components directory.
- This ensures that each component's functionality is verified and maintains high code quality.


## Directory Structure

```
babbel-web/
└── src/
    ├── client/
    │   ├── assets/                                     # Directory holding the assets needed for the app (images, styles, etc.)
    │   ├── modules/                                    # Directory holding different views/modules of the application
    │   │   └── home/                                   # Home module containing its specific components and services
    │   │       ├── api/                                # API-related files for the home module
    │   │       │   ├── emailService.tsx                # Service for handling email-related API calls
    │   │       │   └── utils.tsx                       # Utility functions for the home module
    │   │       ├── components/                         # Components specific to the home module
    │   │       │   ├── __tests__/                      # Folder holding test cases for components
    │   │       │   │   ├── failure.test.tsx            # Test cases for the Failure component
    │   │       │   │   ├── success.test.tsx            # Test cases for the Success component
    │   │       │   │   ├── inputForm.test.tsx          # Test cases for the InputForm component
    │   │       │   │   ├── heroSectionBase.test.tsx    # Test cases for the HeroSectionBase component
    │   │       │   ├── failure.tsx                     # Component for displaying failure messages
    │   │       │   ├── success.tsx                     # Component for displaying success messages
    │   │       │   ├── inputForm.tsx                   # Component for user input form to derive emails
    │   │       │   └── heroSectionBase.tsx             # Component for the hero section of the home page
    │   │       ├── index.tsx                           # Main screen for the home module
    │   │       └── types.ts                            # TypeScript types/interfaces for the home module
    │   ├── routes/                                     # Directory holding route definitions
    │   │   └── index.tsx                               # Main routing file for the application
    │   ├── shared/                                     # Shared components or utilities used across different modules
    │   │   └── layout/                                 # Layout components for the application
    │   │       ├── index.tsx                           # Main layout component
    │   │       └── types.ts                            # Type definitions for layout components
    │   ├── ui-library/                                 # Library of UI components that can be reused throughout the app
    │   │   └── icons/                                  # Directory holding icon components
    │   │       └── HomeIcons.tsx                       # Component for home-related icons
    └── App.tsx                                         # Main App component, serves as the entry point for the application
    
    

```

## Environment Configuration

To configure the project, create a `.env` file in the root directory and include the following parameters:

```plaintext
# Server address for the backend process
REACT_APP_SERVER_ADDRESS=http://localhost:3001 

# Development environment
REACT_APP_ENVIRONMENT=development
```

## Running the frontend

### Prerequisites

- Node.js (v18.20.4 or higher)
- npm (v10.7.0 or higher)

### `npm install`

Install the packages present in package.json file.

### `npm start`

Runs the app on port 3000 by default\
Open [http://localhost:3000](http://localhost:3000) to view the page on the browser.

### `npm test`

Initiates the test runner in interactive watch mode.

### `npm run build`

Builds the app for production in the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
