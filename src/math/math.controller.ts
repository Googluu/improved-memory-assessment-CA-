import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';

import { MathService } from './math.service';
import { CreateMathDto } from './dto/create-math.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @Post('isPrime')
  @UseGuards(JwtAuthGuard)
  isPrime(@Body() createMathDto: CreateMathDto) {
    return this.mathService.isPrime(createMathDto);
  }
}
