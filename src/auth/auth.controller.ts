import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async create(@Body() createAuthDto: CreateAuthDto) {
    try {
      const token = await this.authService.login(createAuthDto);
      console.log(token);
      return token;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
