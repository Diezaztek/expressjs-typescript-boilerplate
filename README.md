# ExpressJS TypeScript Project

This is a starter template for an ExpressJS project written in TypeScript. It provides a basic structure and configuration to help you get started quickly.

## Prerequisites

Before you begin, ensure that you have the following installed:

- Node.js
- npm (Node Package Manager)

## Getting Started

1. Clone this repository to your local machine.
2. Copy the .env.example file into an .env file and reeplace the variables with your own settings
3. Install the dependencies by running `npm install`.
4. Build the TypeScript code by running `npm run build`.
5. Start the development server running `npm run test`.
6. Create new migration files `npm run migration:generate <name of migration>`.
7. Run the migrations into the database `npm run migration:run`.

## Project Structure

The project structure is as follows:

The updated folder structure is as follows:

```plaintext
├── dist
├── migrations
├── src
│   ├── configs
│   ├── controllers
│   ├── interfaces
│   ├── models
│   ├── repository
│   ├── routes
│   ├── services
│   ├── server.ts
│   └── app.ts
├── tests
│   ├── mocks
│   └── unit
│       └── services
├── package.json
├── tsconfig.json
└── README.md
```

The itended usage of each folder is the following:
- The `dist` directory is generated when you build the TypeScript code.
- The `migrations` directory contains files for tracking changes in the database schema
- The `src` directory contains the source code of your application.
- The `config` directory contains configuration objects and de IOC container. The ioc.config.ts file is the only placed where high coupling should be
- The `controllers` directory contains the controllers that handle the incoming requests.
- The `routes` directory contains the route definitions.
- The `models` directory contains the data models.
- The `services` directory contains the business logic of your application.
- The `app.ts` file is the entry point of your application.

## License

This project is licensed under the [MIT License](LICENSE).
