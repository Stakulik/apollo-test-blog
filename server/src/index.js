const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
    };
  },
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
  `);
});
