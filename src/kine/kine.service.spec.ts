import { Test, TestingModule } from '@nestjs/testing';
import { KineService } from './kine.service';

describe('KineService', () => {
  let service: KineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KineService],
    }).compile();

    service = module.get<KineService>(KineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
