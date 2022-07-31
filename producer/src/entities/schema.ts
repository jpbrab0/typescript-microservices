/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { gql } from 'apollo-server';

import { userResolver } from './user/resolvers';
import { userSchema } from './user/schema';

const rootTypeDefs = gql`
  type Mutation {
    _empty: Boolean!
  }

  type Query {
    _empty: Boolean!
  }
`;

const rootResolvers = {
  Mutation: {
    _empty: () => true,
  },
  Query: {
    _empty: () => true,
  },
};

const typeDefs = [rootTypeDefs, userSchema];
const resolvers = [rootResolvers, userResolver];

export { typeDefs, resolvers };
