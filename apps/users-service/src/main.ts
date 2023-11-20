import { NestFactory } from '@nestjs/core';
import { AppModule } from './users-service.module';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    {
      name: 'AUTH_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'auth-consumer',
        },
      },
    },
  );
  app.listen();
}
bootstrap();
