import { Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
@Injectable()
export class UsersServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
