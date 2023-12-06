import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BookGuard } from './book/book.guard';

//NestJS is started from this file

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Authentication
  //app.useGlobalGuards(new BookGuard());
  await app.listen(3000);
}
bootstrap();
