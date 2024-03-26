import { Injectable } from '@nestjs/common';
import { CreateMathDto } from './dto/create-math.dto';

@Injectable()
export class MathService {
  isPrime({ number }: CreateMathDto): boolean {
    return this.isPrimeNumber(number);
  }

  private isPrimeNumber(number: number): boolean {
    if (number < 2) return false;
    for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
}
