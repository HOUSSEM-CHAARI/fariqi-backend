import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Kine } from '../kine/kine.entity';
export declare class AuthKineService {
    private readonly kineRepository;
    private readonly jwtService;
    constructor(kineRepository: Repository<Kine>, jwtService: JwtService);
    validateKine(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
