import { Module } from '@nestjs/common';
import { AuthController } from './users-service.controller';
import { AuthService } from './users-service.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../model/user.model';
import { ConfigModule } from '@nestjs/config';
import { ProfileSchema } from '../model/profile.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'AUTH',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'auth-consumer',
          },
        },
      },
    ]),
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    MongooseModule.forFeature([{
      name: 'User', schema: UserSchema, collection: 'userInfoBasic', 
    }]),

    MongooseModule.forFeature([{
      name: 'Profile', schema: ProfileSchema, collection: 'userInfoProfile', 
    }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
