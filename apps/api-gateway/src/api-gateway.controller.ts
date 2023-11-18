import { Body, Controller, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { SignupDto } from '../dto/signup.dto';
import { SigninDto } from '../dto/signin.dto';

@Controller('/api')
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Post('/signup')
  async signup(@Body() signupDto: SignupDto) {
    return this.apiGatewayService.sendSignup(signupDto);
  }

  @Post('/signin')
  async signin(@Body() signinDto: SigninDto) {
    return this.apiGatewayService.signin(signinDto);
  }
}
