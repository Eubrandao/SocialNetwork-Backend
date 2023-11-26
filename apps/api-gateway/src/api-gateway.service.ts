// api-gateway.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { SignupDto } from '../dto/signup.dto';
import { SigninDto } from '../dto/signin.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class ApiGatewayService {
  constructor(@Inject('GATEWAY_SERVICE') private readonly kafkaService: ClientKafka) {}

  
  async sendSignup(signupDto: SignupDto) {
    // Enviar mensagem para o tópico 'signup'
    console.log(signupDto)
    await this.kafkaService.emit('signup', signupDto);
    return 'Cadastrado com Sucesso!'
  }

  async sendUpdateProfile(body) {
    // Enviar mensagem para o tópico 'profile'
    console.log(body)
    await this.kafkaService.emit('profile', body);
    return 'Perfil Atualizado com sucesso!'
  }
}
