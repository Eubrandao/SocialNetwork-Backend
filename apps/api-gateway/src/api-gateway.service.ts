import { Injectable, Inject } from '@nestjs/common';
import { SignupDto } from '../dto/signup.dto';
import { SigninDto } from '../dto/signin.dto';
import { ClientKafka } from '@nestjs/microservices';
import { Kafka } from 'kafkajs';
import { Admin } from '@nestjs/microservices/external/kafka.interface';

@Injectable()
export class ApiGatewayService {
  constructor(@Inject('users') private client: ClientKafka) {}
  private admin: Admin;

  async onModuleInit() {
    this.client.subscribeToResponseOf('users');
    const kafka = new Kafka({
      clientId: 'user',
      brokers: ['localhost:9092'],
      retry: {
        maxRetryTime: 5000,
        retries: 5,
      },
    });
    this.admin = kafka.admin();
    const topics = await this.admin.listTopics();

    const topicList = [];
    if (!topics.includes('signup')) {
      topicList.push({
        topic: 'signup',
        numPartitions: 10,
        replicationFactor: 1,
      });
    }

    if (!topics.includes('signup.reply')) {
      topicList.push({
        topic: 'signup.reply',
        numPartitions: 10,
        replicationFactor: 1,
      });
    }

    if (topicList.length) {
      await this.admin.createTopics({
        topics: topicList,
      });
    }
  }

  sendSignup(signupDto: SignupDto): string {
    if (!!(signupDto.email && signupDto.password)) {
      //precisamos emitir esses dados para o service e receber a resposta de cadastrado ou não
      this.client
      .send('signup', JSON.stringify(signupDto))
      .subscribe((result: string) => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>', result);
      });
      return 'Cadastrado com sucesso';
    } else {
      return 'Ops, Houve algum erro!';
    }
  }

  signin(signinDto: SigninDto): string {
    if (!!(signinDto.email && signinDto.password)) {
      //precisamos emitir esses dados para o authenticator e receber a resposta de autenticado ou não
      return 'Autenticado';
    } else {
      return 'Dados Incorretos';
    }
  }
}
