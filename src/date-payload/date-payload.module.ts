import { Module } from '@nestjs/common';
import { DatePayloadService } from './date-payload.service';
import { DatePayloadController } from './date-payload.controller';

@Module({
  controllers: [DatePayloadController],
  providers: [DatePayloadService],
})
export class DatePayloadModule {}
