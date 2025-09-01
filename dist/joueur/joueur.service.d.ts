import { Repository } from 'typeorm';
import { Joueur } from './joueur.entity';
import { CreateJoueurDto } from './dto/create-joueur.dto';
import { UpdateJoueurDto } from './dto/update-joueur.dto';
export declare class JoueurService {
    private joueurRepository;
    constructor(joueurRepository: Repository<Joueur>);
    create(createJoueurDto: CreateJoueurDto): Promise<Joueur>;
    findAll(): Promise<Joueur[]>;
    findOne(id: number): Promise<Joueur>;
    update(id: number, updateJoueurDto: UpdateJoueurDto): Promise<Joueur>;
    remove(id: number): Promise<void>;
}
