import { Test, TestingModule } from '@nestjs/testing';
import { PreparateurService } from './preparateur.service';

describe('PreparateurService', () => {
  let service: PreparateurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreparateurService],
    }).compile();

    service = module.get<PreparateurService>(PreparateurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
