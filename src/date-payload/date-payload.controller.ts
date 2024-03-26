import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DatePayloadService } from './date-payload.service';
import { CreateDatePayloadDto } from './dto/create-date-payload.dto';

@Controller('date-payload')
export class DatePayloadController {
  constructor(private readonly datePayloadService: DatePayloadService) {}

  @Post('payload')
  payload(@Body() createDatePayloadDto: CreateDatePayloadDto) {
    return this.datePayloadService.payload(createDatePayloadDto);
  }
}
