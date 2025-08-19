import { Test, TestingModule } from '@nestjs/testing';
import { JoueurService } from './joueur.service';

describe('JoueurService', () => {
  let service: JoueurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoueurService],
    }).compile();

    service = module.get<JoueurService>(JoueurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
