import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Joueur } from '../joueur/joueur.entity';
export declare class AuthJoueurService {
    private joueurRepo;
    private jwtService;
    constructor(joueurRepo: Repository<Joueur>, jwtService: JwtService);
    validateJoueur(email: string, password: string): Promise<any>;
}
