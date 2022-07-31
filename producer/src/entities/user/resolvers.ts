/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { kafka } from '../../config/kafka';
import { UserService } from '../../services/UserService';

const service = new UserService(kafka);

export const userResolver = {
  Mutation: {
    createUser: (_: any, { data }: any) => service.create(data),
  },
};
