import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MathService } from './math.service';
import { CreateMathDto } from './dto/create-math.dto';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @Post('isPrime')
  isPrime(@Body() createMathDto: CreateMathDto) {
    return this.mathService.isPrime(createMathDto);
  }
}
