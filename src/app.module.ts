import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { TypeOrmModule} from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

//PostgreSQL Database Integration is Done
@Module({
  imports: [
    //TypeOrm helps us connect to the database
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true,
        //environment file
        envFilePath: ".local.env",
        //envFilePath: ".prod.env"
    })],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: configService.get<boolean>('DB_SYNC'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        logging: true
        
      }),
      inject: [ConfigService],
    }),
    BookModule, UsersModule,
    UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
