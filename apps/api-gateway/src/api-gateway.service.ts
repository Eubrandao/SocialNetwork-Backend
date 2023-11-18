import { Injectable } from '@nestjs/common';
import { SignupDto } from '../dto/signup.dto';
import { SigninDto } from '../dto/signin.dto';

@Injectable()
export class ApiGatewayService {
  sendSignup(signupDto: SignupDto): string {
    if (!!(signupDto.email && signupDto.password)) {
      //precisamos emitir esses dados para o service e receber a resposta de cadastrado ou não
      return 'Cadastrado com sucesso';
    } else {
      return 'Ops, Houve algum erro!';
    }
  }

  signin(signinDto: SigninDto): string {
    if (!!(signinDto.email && signinDto.password)) {
      //precisamos emitir esses dados para o authenticator e receber a resposta de autenticado ou não
      return 'Autenticado';
    } else {
      return 'Dados Incorretos';
    }
  }
}
