import { Controller} from '@nestjs/common';
import { NotificationServiceService } from './notification-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class NotificationServiceController {
  constructor(private readonly notificationServiceService: NotificationServiceService) {}


  @MessagePattern('notification') //topic;
  async handleNotification(body){
    console.log("Notification Service - Received message for user service:" , body)
  }
}
