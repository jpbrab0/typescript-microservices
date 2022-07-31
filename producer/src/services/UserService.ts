/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-unresolved, import/extensions
import KafkaProducer from '../KafkaProducer';

type CreateProps = {
  username: string,
  company: string
}

interface IUserService {
  // eslint-disable-next-line no-unused-vars
  create({ username, company }: CreateProps): Promise<boolean>
}

export class UserService implements IUserService {
  private kafka: KafkaProducer;

  constructor(kafka: KafkaProducer) {
    this.kafka = kafka;
  }

  async create({ username, company }: CreateProps): Promise<boolean> {
    try {
      await this.kafka.connect();
      await this.kafka.send([{ message: 'User created', username, company }]);
      await this.kafka.disconnect();

      return true;
    } catch (_) {
      return false;
    }
  }
}
