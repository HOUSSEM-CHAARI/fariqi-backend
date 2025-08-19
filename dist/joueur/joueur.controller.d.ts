import { JoueurService } from './joueur.service';
import { CreateJoueurDto } from './dto/create-joueur.dto';
import { UpdateJoueurDto } from './dto/update-joueur.dto';
import { Joueur } from './joueur.entity';
export declare class JoueurController {
    private readonly joueurService;
    constructor(joueurService: JoueurService);
    create(dto: CreateJoueurDto): Promise<Joueur>;
    findAll(): Promise<Joueur[]>;
    findOne(id: string): Promise<Joueur>;
    update(id: string, dto: UpdateJoueurDto): Promise<Joueur>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
