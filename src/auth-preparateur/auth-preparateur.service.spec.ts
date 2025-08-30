import { Test, TestingModule } from '@nestjs/testing';
import { AuthPreparateurService } from './auth-preparateur.service';

describe('AuthPreparateurService', () => {
  let service: AuthPreparateurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthPreparateurService],
    }).compile();

    service = module.get<AuthPreparateurService>(AuthPreparateurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
