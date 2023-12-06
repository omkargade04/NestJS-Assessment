import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { PassportModule, AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { Validate } from 'class-validator';


@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}


  //Authorization taking place
  @Post('/login')
  @UseGuards(AuthGuard("local"))
  login(@Request() req): string {
    return this.authService.genterateToken(req.user);
    //return req.user;
  }
}
