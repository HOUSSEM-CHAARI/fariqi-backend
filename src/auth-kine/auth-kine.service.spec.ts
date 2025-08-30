import { Test, TestingModule } from '@nestjs/testing';
import { AuthKineService } from './auth-kine.service';

describe('AuthKineService', () => {
  let service: AuthKineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthKineService],
    }).compile();

    service = module.get<AuthKineService>(AuthKineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
