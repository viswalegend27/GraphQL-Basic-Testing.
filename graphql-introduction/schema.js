export const typeDefs = `#graphql 
  type Shirt {
    id: ID!,
    fabric_name: String!
    color: [String!]! # array of strings
    size: Int!
    reviews: [Review!]
    }
  type Pant {
    id: ID!
    fabric_name: String!
    color: [String!]! # array of strings
    size: Int!
    reviews: [Review!]
    }
  type Review {
    id: ID!
    rating: Int!
    comment: String!
    Shirt: Shirt!
    Pant: Pant!
}
type Company {
    id: ID!
    Owner: String!
    Verified: Boolean!
}
  # The below is the entry point for all queries it is a must 
  type Query {
    Shirts: [Shirt!]!
    Pants: [Pant!]!
    Companies: [Company!]!
    Reviews: [Review!]!
    Review(id: ID!): Review # <-- Example of query with argument. It is an Query Variable
    Company(id: ID!): Company
    Shirt(id: ID!): Shirt
    Pant(id: ID!): Pant
  }
`
// int ,float ,string ,boolean 
// ID <- used as key for our data objects