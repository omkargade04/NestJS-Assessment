
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';


@Module({
  imports: [PassportModule, UsersModule, 
    
    JwtModule.register({
        secret: "key",
        signOptions:{
            expiresIn: "60s",
        }
    })

],
  controllers: [],
  providers: [LocalStrategy, UserService, AuthService],
  exports: [AuthService],
})
export class AuthModule {}