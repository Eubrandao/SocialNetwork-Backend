import { Controller, Get } from '@nestjs/common';
import { FeedServiceService } from './feed-service.service';

@Controller()
export class FeedServiceController {
  constructor(private readonly feedServiceService: FeedServiceService) {}

  @Get()
  getHello(): string {
    return this.feedServiceService.getHello();
  }
}
