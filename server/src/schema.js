const { gql } = require('apollo-server');

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    author: Author!
    published_at: DateTime!
  }

  type Comment {
    id: ID!
    body: String!
    author: Author!
    published_at: DateTime!
  }

  type User {
    id: ID!
    nickname: String!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
