import { Injectable, Inject} from '@nestjs/common';
import { SignupDto } from 'apps/api-gateway/dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../model/user.model';
import { Profile } from '../model/profile.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ClientKafka } from '@nestjs/microservices';
// import { ProfileDto } from 'apps/api-gateway/dto/profile.dto';


@Injectable()
export class AuthService {
    constructor(
        @Inject('AUTH_SERVICE') 
        private readonly kafkaService: ClientKafka,
        @InjectModel('User')
        private readonly userModel: Model<User>,
        @InjectModel('Profile')
        private readonly profileModel: Model<Profile>,
      ) {}


 async signup(signupDto: SignupDto): Promise<string> {
    const body = {
      name: signupDto.name,
      email: signupDto.email,
      password: await this.encrypt(signupDto.password)
    }
    const result = await new this.userModel(body).save();

    const profile = {
      userID: result._id,
      name: signupDto.name,
      email: signupDto.email
    }

    await new this.profileModel(profile).save()
    await this.sendMsgToNotification(profile)
    return result.id
 }

//  async updateProfile(body){
//   // const result = await this.profileModel.findByIdAndUpdate({userID:  body.id.toString()}, {$push: body.profileDto})

//   // return result
  
//  }

 async encrypt(signupDto){
  const saltOrRounds = 10;
  const password = signupDto
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash
 }

 async sendMsgToNotification(body){
  await this.kafkaService.emit('notification', body);
 }

}
