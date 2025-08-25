import { Test, TestingModule } from '@nestjs/testing';
import { AuthCoachService } from './auth-coach.service';

describe('AuthCoachService', () => {
  let service: AuthCoachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthCoachService],
    }).compile();

    service = module.get<AuthCoachService>(AuthCoachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
