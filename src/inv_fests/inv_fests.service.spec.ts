import { Test, TestingModule } from '@nestjs/testing';
import { InvFestsService } from './inv_fests.service';

describe('InvFestsService', () => {
  let service: InvFestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvFestsService],
    }).compile();

    service = module.get<InvFestsService>(InvFestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
