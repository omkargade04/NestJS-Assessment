import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookPipe } from "./pipes/book.pipe";
import { BookException } from "./book.exception";
import { BookGuard } from "./book.guard";
import { BookInterceptor } from "./book.interceptor";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
//import { Book } from "../entities/book.entity";

@Controller('book')
@UseGuards(new BookGuard())
export class BookController{
    constructor(private bookService: BookService){

    }

    //Endpoint to display list of book details
    @Get('/findAll')
    getAllBooks(){
        console.log(this.bookService.getAllBooks());
        return this.bookService.getAllBooks();
    }

    //Endpoint to display book detail of respective ID
    @Get(':id')
    getABook(@Param('id') id: number) {
    return this.bookService.getABook(+id);
  }

    //Endpoint to add new Book details
    @Post('/add')
    @UseInterceptors(BookInterceptor)
    addBookService(@Body(new ValidationPipe()) createBookDto: CreateBookDto){
        return this.bookService.addBookService(createBookDto);
    }

    //Endpoint to update existing book details
    @Put('/update/:id')
    updateBookService(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto){
        return this.bookService.updateBookService(+id, updateBookDto);
    }

    //Endpoint to delete book details
    @Delete('/delete/:id')
    deleteBookService(@Param('id') bookId: string){
        return this.bookService.deleteBookService(+bookId);
    }

}