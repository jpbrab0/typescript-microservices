import {
  CompressionTypes,
  Kafka, KafkaConfig, Message, Producer, RecordMetadata,
} from 'kafkajs';

interface KafkaMessage {
  message: string
  username: string,
  company: string
}

export default class KafkaProducer {
  private producer: Producer;

  private topic: string;

  private constructor(producer: Producer, topic: string) {
    this.producer = producer;
    this.topic = topic;
  }

  static create(kafkaConfig: KafkaConfig, topic: string): KafkaProducer {
    const kafka = new Kafka(kafkaConfig);
    return new KafkaProducer(kafka.producer(), topic);
  }

  // eslint-disable-next-line max-len
  public async send(messages: KafkaMessage[]): Promise<RecordMetadata[]> {
    const kafkaMessages: Message[] = messages.map((message) => ({
      value: JSON.stringify(message),
    }));

    return this.producer.send({
      topic: this.topic,
      compression: CompressionTypes.GZIP,
      messages: kafkaMessages,
    });
  }

  public async connect(): Promise<void> {
    return this.producer.connect();
  }

  public async disconnect(): Promise<void> {
    return this.producer.disconnect();
  }
}
