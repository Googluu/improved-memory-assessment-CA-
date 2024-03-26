import { Test, TestingModule } from '@nestjs/testing';
import { DatePayloadService } from './date-payload.service';

describe('DatePayloadService', () => {
  let service: DatePayloadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatePayloadService],
    }).compile();

    service = module.get<DatePayloadService>(DatePayloadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
