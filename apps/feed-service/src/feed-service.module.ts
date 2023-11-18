import { Module } from '@nestjs/common';
import { FeedServiceController } from './feed-service.controller';
import { FeedServiceService } from './feed-service.service';

@Module({
  imports: [],
  controllers: [FeedServiceController],
  providers: [FeedServiceService],
})
export class FeedServiceModule {}
