import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {IsInt, IsString} from 'class-validator';

//Generates the Database

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    @IsInt()
    id: number;

    @Column()
    @IsString()
    title: string;

    @Column()
    @IsString()
    author: string;

    // @Column()
    // @IsString()
    // genre: string;
}