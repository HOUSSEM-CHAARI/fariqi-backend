import { AuthJoueurService } from '../auth-joueur/auth-joueur.service';
export declare class JoueurController {
    private readonly authJoueurService;
    constructor(authJoueurService: AuthJoueurService);
    login(body: {
        email: string;
        password: string;
    }): Promise<any>;
}
