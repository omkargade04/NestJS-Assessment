import { IsString } from "class-validator";

//Creates the data of Database Table
export class CreateUserDto {
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsString()
    email: string;
    @IsString()
    password: string;
}
