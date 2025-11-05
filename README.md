# GraphQL Introduction

A simple introductory project for GraphQL, demonstrating the basics of setting up a GraphQL server with Node.js.

## Project Structure

```
graphql-introduction/
│
├── database.js          # Contains mock data or in-memory database logic
├── index.js             # Main entry point for the GraphQL server
├── schema.js            # Defines GraphQL types, queries, and mutations
├── package.json         # Project dependencies and scripts
├── .gitignore           # Ignored files and folders for git
└── node_modules/        # Installed dependencies
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (recommended version 14.x or above)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
    ```shell
    git clone <repository-url>
    cd graphql-introduction
    ```
2. Install dependencies:
    ```shell
    npm install
    ```

### Running the Server

To start the GraphQL server, use:

```shell
node index.js
```

The server should start and listen on a predefined port (default: 4000).  
You can now access the GraphQL Playground or send queries to the server endpoint (e.g., http://localhost:4000/graphql).

## Project Files

- **index.js**: Sets up the Express server and integrates GraphQL middleware.
- **schema.js**: Contains the GraphQL schema definitions (types, queries, mutations).
- **database.js**: Holds sample data or logic to mock a database for demonstration purposes.

## Usage

Once the server is running, you can interact with it using GraphQL queries.  
Open GraphQL Playground in your browser and try queries such as:

```graphql
query {
  # Example query format
}
```

Or mutations:

```graphql
mutation {
  # Example mutation format
}
```

## License

This project is intended for educational purposes.

---
