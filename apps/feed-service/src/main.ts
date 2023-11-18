import { NestFactory } from '@nestjs/core';
import { FeedServiceModule } from './feed-service.module';

async function bootstrap() {
  const app = await NestFactory.create(FeedServiceModule);
  await app.listen(3000);
}
bootstrap();
