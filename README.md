# People Manager App

## Overview

The People Manager App is a Single Page Application (SPA) built with Angular 7/8 for managing a list of people. It provides a modern, responsive user interface leveraging Angular Material Design and integrates seamlessly with a Node.js/MongoDB RESTful API for performing CRUD operations on person data.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete person records.
- **Responsive Design**: Built with Angular Material for a modern look and feel.
- **User-Friendly Interface**: Easy navigation and interaction for managing people.
- **Error Handling**: Proper feedback for user actions and error states.

## Project Structure

```
people-manager-app
├── src
│   ├── app
│   │   ├── core
│   │   │   ├── services
│   │   │   │   └── person.service.ts
│   │   │   └── models
│   │   │       └── person.model.ts
│   │   ├── shared
│   │   │   └── material.module.ts
│   │   ├── people
│   │   │   ├── people-list
│   │   │   │   ├── people-list.component.ts
│   │   │   │   ├── people-list.component.html
│   │   │   │   └── people-list.component.scss
│   │   │   ├── person-form
│   │   │   │   ├── person-form.component.ts
│   │   │   │   ├── person-form.component.html
│   │   │   │   └── person-form.component.scss
│   │   │   └── people.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   └── app.module.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   └── index.html
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd people-manager-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up the environment variables in `src/environments/environment.ts` for the API base URL.

## Running the Application

To run the application in development mode, use the following command:

```
ng serve
```

Open your browser and navigate to `http://localhost:4200` to view the application.

## API Integration

The application interacts with the following RESTful endpoints:

- **GET /person**: Retrieve a list of all people.
- **POST /person**: Create a new person.
- **PUT /person/{id}**: Update an existing person by their unique ID.
- **DELETE /person/{id}**: Delete a person by their unique ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.