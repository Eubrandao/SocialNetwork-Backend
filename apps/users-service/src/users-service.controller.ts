import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './users-service.service';
import { SignupDto } from 'apps/api-gateway/dto/signup.dto';//deixar global
import { ProfileDto } from 'apps/api-gateway/dto/profile.dto';

@Controller()
export class AuthController {
  constructor(private readonly usersService: AuthService) {}

  @MessagePattern('signup') //topic;
  async handleSignup(signupDto: SignupDto) {
    console.log('Received message for signup service:', signupDto);
    return this.usersService.signup(signupDto);
}

@MessagePattern('profile') //topic;
async handleProfile(body) {
  console.log('Received message for profile service:', body);
  return this.usersService.updateProfile(body);
}

}