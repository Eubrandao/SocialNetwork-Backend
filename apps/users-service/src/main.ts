import { NestFactory } from '@nestjs/core';
import { UsersServiceModule } from './users-service.module';
import { Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersServiceModule, {
    name: 'users',
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'user',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'auth-consumer',
      },
    },
  });

  await app.listen();
}
bootstrap();