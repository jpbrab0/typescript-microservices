/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
import { gql } from 'apollo-server';

export const userSchema = gql`
	input UserTypes {
    username: String!
    company: String!
	}

	type User {
    id: ID!
		username: String
		company: String
	}

	extend type Mutation {
		createUser(data: UserTypes!): Boolean
	}
`;
