import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { UserService } from "src/user/user.service";
import { User } from "src/user/user.entity";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private readonly userService: UserService){
        super();
    }

    validate(username: string, password: string): User{
        const user: User = this.userService.getUserByUserName(username);

        if(user == undefined) throw new UnauthorizedException();
        if(user != undefined && user.password == password) return user;
        else throw new UnauthorizedException();
    }

}