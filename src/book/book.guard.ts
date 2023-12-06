import { CanActivate, Injectable } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common/interfaces/features/execution-context.interface";
import { Request } from "express";

//Please insert the required *Username* and *Password* in the Header Field of your respective API Testers

@Injectable()
export class BookGuard implements CanActivate{

    public username: string = "user";
    public password: string = "password";

    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();

        if(request.header("username") == undefined || request.header("password") == undefined){
            return false;
        }
        console.log("Guard is Breached");
        return request.header("username") === this.username && request.header("password") === this.password;
    }
}
