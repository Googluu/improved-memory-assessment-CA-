import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { MathService } from './math.service';
import { MathController } from './math.controller';

@Module({
  controllers: [MathController],
  providers: [MathService, JwtService],
})
export class MathModule {}
