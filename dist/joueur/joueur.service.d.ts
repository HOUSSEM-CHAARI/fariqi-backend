import { Joueur } from './joueur.entity';
import { Repository } from 'typeorm';
import { CreateJoueurDto } from './dto/create-joueur.dto';
import { UpdateJoueurDto } from './dto/update-joueur.dto';
export declare class JoueurService {
    private joueurRepository;
    constructor(joueurRepository: Repository<Joueur>);
    create(dto: CreateJoueurDto): Promise<Joueur>;
    findAll(): Promise<Joueur[]>;
    findOne(id: number): Promise<Joueur>;
    update(id: number, dto: UpdateJoueurDto): Promise<Joueur>;
    remove(id: number): Promise<void>;
}
