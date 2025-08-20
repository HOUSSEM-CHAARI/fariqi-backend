import { Test, TestingModule } from '@nestjs/testing';
import { PreparateurController } from './preparateur.controller';

describe('PreparateurController', () => {
  let controller: PreparateurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreparateurController],
    }).compile();

    controller = module.get<PreparateurController>(PreparateurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
