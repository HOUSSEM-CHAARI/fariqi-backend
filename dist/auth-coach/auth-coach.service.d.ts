import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Coach } from '../coach/coach.entity';
export declare class AuthCoachService {
    private coachRepo;
    private jwtService;
    constructor(coachRepo: Repository<Coach>, jwtService: JwtService);
    validateCoach(email: string, password: string): Promise<any>;
}
