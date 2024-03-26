import { IsNumber } from 'class-validator';

export class CreateMathDto {
  @IsNumber()
  number: number;
}
