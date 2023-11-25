import { Injectable} from '@nestjs/common';
import { SignupDto } from 'apps/api-gateway/dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../model/user.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel('User')
        private readonly userModel: Model<User>,
      ) {}


 async signup(signupDto: SignupDto): Promise<string> {
    const body = {
      name: signupDto.name,
      email: signupDto.email,
      password: await this.encrypt(signupDto.password)
    }
    const result = await new this.userModel(body).save();
    return result.id
 }

 async encrypt(signupDto){
  const saltOrRounds = 10;
  const password = signupDto
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash
 }

}
