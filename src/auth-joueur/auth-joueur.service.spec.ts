import { Test, TestingModule } from '@nestjs/testing';
import { AuthJoueurService } from './auth-joueur.service';

describe('AuthJoueurService', () => {
  let service: AuthJoueurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthJoueurService],
    }).compile();

    service = module.get<AuthJoueurService>(AuthJoueurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
