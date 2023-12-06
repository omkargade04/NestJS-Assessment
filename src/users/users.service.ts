import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from 'src/user/user.service';
import { UserRepository } from './repo/user.repository';
import { Constants } from 'src/utils/constants';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User)private readonly userRepository: Repository<User>){

  }

  //Authentication of new Users
  create(createUserDto: CreateUserDto) {
    let user = new User();
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.password = createUserDto.password;
    user.role = Constants.ROLES.NORMAL_ROLE;
    return this.userRepository.save(user);
  }

  //List of all Users
  findAll() {
    return this.userRepository.find();
  }

  //Deletion of Users
  remove(id: number) {
    return this.userRepository.remove(new User());
  }
}
