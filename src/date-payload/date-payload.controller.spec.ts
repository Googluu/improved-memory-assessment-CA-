import { Test, TestingModule } from '@nestjs/testing';
import { DatePayloadController } from './date-payload.controller';
import { DatePayloadService } from './date-payload.service';

describe('DatePayloadController', () => {
  let controller: DatePayloadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatePayloadController],
      providers: [DatePayloadService],
    }).compile();

    controller = module.get<DatePayloadController>(DatePayloadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
