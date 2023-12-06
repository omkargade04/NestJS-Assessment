import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
//import { Book } from "../data/book.dto";
import { validate } from "class-validator";
import { Book } from "../entities/book.entity";

export class BookPipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata):    Promise<any>{

        //class transformer obj convet class

        const bookClass = plainToInstance(Book, value);

        //class validator
        const errors = await validate(bookClass);

        if(errors.length > 0){
            throw new BadRequestException("Validation Failed"+ JSON.stringify(errors));
        }

        console.log(value, typeof(value));
        return value;
    }
}