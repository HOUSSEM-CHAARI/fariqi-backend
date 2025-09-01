import { JoueurService } from './joueur.service';
import { CreateJoueurDto } from './dto/create-joueur.dto';
import { UpdateJoueurDto } from './dto/update-joueur.dto';
import { Joueur } from './joueur.entity';
import { AuthJoueurService } from '../auth-joueur/auth-joueur.service';
export declare class JoueurController {
    private readonly joueurService;
    private readonly authJoueurService;
    constructor(joueurService: JoueurService, authJoueurService: AuthJoueurService);
    create(createJoueurDto: CreateJoueurDto): Promise<Joueur>;
    findAll(): Promise<Joueur[]>;
    update(id: number, updateJoueurDto: UpdateJoueurDto): Promise<Joueur>;
    findOne(id: number): Promise<Joueur>;
    remove(id: number): Promise<{
        message: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<any>;
    getProfile(req: any): any;
}
