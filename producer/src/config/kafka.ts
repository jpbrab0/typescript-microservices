/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import KafkaProducer from '../KafkaProducer';

export const kafka = KafkaProducer.create({
  clientId: '1',
  brokers: ['localhost:9092'],
}, 'typescript_microservice_topic');
