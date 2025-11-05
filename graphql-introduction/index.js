import { ApolloServer } from "@apollo/server";
// Below is used to start the server in standalone mode
import { startStandaloneServer } from "@apollo/server/standalone";
import {typeDefs} from './schema.js';
import db from './database.js';

// Here i can define how the queries are handled and what data is sent back
const resolvers = {
  Query: {
    Shirts: () => db.Shirts,
    Pants: () => db.Pants,
    Reviews: () => db.Reviews,
    Companies: () => db.Companies,
    Review(_, args) {
      return db.Reviews.find((r) => r.id === args.id);
    },
    Shirt(_, args) {
      return db.Shirts.find((r) => r.id === args.id);
    },
    Pant(_, args) {
      return db.Pants.find((r) => r.id === args.id);
    },
    Company(_, args) {
      return db.Companies.find((r) => r.id === args.id);
    }
  },
  Shirt: {
    reviews(parent) {
      return db.Reviews.filter((r) => String(r.shirtId ?? '') === parent.id);
    }
  },
  Pant: {
    reviews(parent) {
      return db.Reviews.filter((r) => String(r.pantId ?? '') === parent.id);
    }
  },
  Review: {
    Shirt(parent) {
      return db.Shirts.find((r) => r.id === parent.shirtId);
    },
    Pant(parent) {
      return db.Pants.find((r) => r.id === parent.pantId);
    } 
  }
};

// My server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});

console.log('Server is running at port',4000);