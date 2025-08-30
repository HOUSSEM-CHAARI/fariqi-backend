import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Preparateur } from '../preparateur/preparateur.entity';
export declare class AuthPreparateurService {
    private preparateurRepo;
    private jwtService;
    constructor(preparateurRepo: Repository<Preparateur>, jwtService: JwtService);
    validatePreparateur(email: string, password: string): Promise<any>;
}
