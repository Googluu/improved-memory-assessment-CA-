import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateAuthDto } from './dto/create-auth.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password }: CreateAuthDto) {
    const user = await this.userService.getByEmail(email);
    if (!user) throw new UnauthorizedException();
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException();
    const payload = {
      sub: user.id,
    };
    const token = this.jwtService.sign(payload);
    delete user.password;
    return {
      user,
      token,
    };
  }
}
