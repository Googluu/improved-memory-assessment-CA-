import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.createUser(createUserDto);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Get()
  async getUsers() {
    const users = await this.userService.getUsers();
    return users;
  }

  @Get(':term')
  async getUserById(@Param('term') term: string) {
    const user = await this.userService.getUserById(term);
    return user;
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userService.updateUser(id, updateUserDto);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string) {
    await this.userService.removeUser(id);
  }
}
