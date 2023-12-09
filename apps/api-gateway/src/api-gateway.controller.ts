import { Body, Controller, Post, Param } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { SignupDto } from '../dto/signup.dto';
// import { SigninDto } from '../dto/signin.dto';
import { ProfileDto } from '../dto/profile.dto';

@Controller('/api')
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Post('/signup')
  async signup(@Body() signupDto: SignupDto) {
    return this.apiGatewayService.sendSignup(signupDto);
  }

  @Post('/updateProfile/:id')
  async updateProfile(@Param('id') id: string, @Body() profileDto: ProfileDto) {
    const body = {
      profile: profileDto,
      id: id
    }
    return this.apiGatewayService.sendUpdateProfile(body);
  }

  // @Post('/signin')
  // async signin(@Body() signinDto: SigninDto) {
  //   return this.apiGatewayService.signin(signinDto);
  // }
}
