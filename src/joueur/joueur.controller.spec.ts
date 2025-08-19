import { Test, TestingModule } from '@nestjs/testing';
import { JoueurController } from './joueur.controller';

describe('JoueurController', () => {
  let controller: JoueurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JoueurController],
    }).compile();

    controller = module.get<JoueurController>(JoueurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
