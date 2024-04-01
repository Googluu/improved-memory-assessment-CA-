import { Injectable, NotFoundException } from '@nestjs/common';
import { validate as isUUID } from 'uuid';
import * as bcrypt from 'bcrypt';

import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const salt = await bcrypt.genSalt(saltOrRounds);
    const hash = await bcrypt.hash(createUserDto.password, salt);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hash,
    });
    await this.userRepository.save(user);
    return user;
  }

  async getUsers() {
    const users = await this.userRepository.find();
    return users;
  }

  async getUserById(term: string) {
    let user: User;

    if (isUUID(term)) {
      user = await this.userRepository.findOne({
        where: { id: term },
      });
    } else {
      const queryBuilder = this.userRepository.createQueryBuilder('user');
      user = await queryBuilder
        .select(['user.id', 'user.nickName', 'user.email'])
        .where('user.nickName = :nickName', {
          nickName: term,
        })
        .getOne();
    }

    if (!user) {
      throw new NotFoundException(`User with ${term} not found`);
    }
    delete user.password;
    return user;
  }

  async getByEmail(email: string) {
    const emailUser = await this.userRepository.findOne({ where: { email } });
    return emailUser;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
    });

    if (!user) throw new NotFoundException(`User with ${id} not found`);

    await this.userRepository.save(user);
    delete user.password;
    return user;
  }

  async removeUser(id: string) {
    const user = await this.getUserById(id);
    await this.userRepository.remove(user);
  }
}
