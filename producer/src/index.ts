/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ApolloServer } from 'apollo-server';

import { resolvers, typeDefs } from './entities/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(async ({ url }) => console.log(`Server está on! ${url}`));
