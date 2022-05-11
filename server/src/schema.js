const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime

  type Query {
    posts: [Post!]!
    post(id: ID!): Post!
  }

  type Mutation {
    createPost(title: String!, body: String!, authorId: Int!, publishedAt: String): Post!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    author: User!
    published_at: DateTime!
  }

  type Comment {
    id: ID!
    body: String!
    author: User!
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
