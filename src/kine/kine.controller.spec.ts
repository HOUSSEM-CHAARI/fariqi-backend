import { Test, TestingModule } from '@nestjs/testing';
import { KineController } from './kine.controller';

describe('KineController', () => {
  let controller: KineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KineController],
    }).compile();

    controller = module.get<KineController>(KineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
