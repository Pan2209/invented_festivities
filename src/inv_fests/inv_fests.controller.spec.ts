import { Test, TestingModule } from '@nestjs/testing';
import { InvFestsController } from './inv_fests.controller';
import { InvFestsService } from './inv_fests.service';

describe('InvFestsController', () => {
  let controller: InvFestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvFestsController],
      providers: [InvFestsService],
    }).compile();

    controller = module.get<InvFestsController>(InvFestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
