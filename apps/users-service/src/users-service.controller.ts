import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './users-service.service';
import { SignupDto } from 'apps/api-gateway/dto/signup.dto';

@Controller()
export class AuthController {
  constructor(private readonly usersService: AuthService) {}

  @MessagePattern('signup') //topic;
  async handleSignup(signupDto: SignupDto) {
    console.log('Received signup message:', signupDto);
    const authenticated = await this.usersService.authenticate(signupDto);
    // Enviar resposta ao tópico 'signup-response'
    if (authenticated) {
      return this.usersService.sendAuthenticationResponse('autenticado');
    } else {
      return this.usersService.sendAuthenticationResponse('não autenticado');
    }
  }
}
