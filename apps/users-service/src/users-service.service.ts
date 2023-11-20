import { Injectable, Inject } from '@nestjs/common';
import { SignupDto } from 'apps/api-gateway/dto/signup.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private readonly kafkaService: ClientKafka) {}

  async authenticate(signupDto: SignupDto): Promise<boolean> {
    return true;
  }

  async sendAuthenticationResponse(response: string) {
    // Enviar mensagem para o tópico 'signup-response'
    await this.kafkaService.emit('signup.reply', response);
  }
}
