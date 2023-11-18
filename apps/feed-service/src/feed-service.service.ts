import { Injectable } from '@nestjs/common';

@Injectable()
export class FeedServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
