import { Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Book } from "./entities/book.entity";


@Injectable()
export class BookService{

    constructor(@InjectRepository(Book)private readonly bookRepository: Repository<Book>){

    }

    //Adds new Book Details in the Database
    addBookService(createBookDto: CreateBookDto){
        let book = new Book();
        book.title = createBookDto.title;
        book.author = createBookDto.author;
        return this.bookRepository.save(book);
    }

    //Updates the Details in existing books
    updateBookService(id, updateBookDto: UpdateBookDto){
        let book = new Book();
        book.title = updateBookDto.title;
        book.author = updateBookDto.author;
        book.id = id;
        return this.bookRepository.save(book);
    }

    //Deletes the existing Books
    deleteBookService(id: number){
        return this.bookRepository.delete(id);
    }

    //Fetch a Book by its ID
    getABook(id: number): any{
        let user = new Book();
    return this.bookRepository.findOne({
      where : {
        id: id,
      }}
    );
    }

    //Display list of all books
    getAllBooks(){
        return this.bookRepository.find();
    }


}