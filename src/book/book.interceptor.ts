import {Injectable, NestInterceptor, ExecutionContext, CallHandler} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BookInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>{
        console.log("this is the interceptor");
        return next.handle();
    }
}