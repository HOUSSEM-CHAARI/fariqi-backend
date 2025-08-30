import { PreparateurService } from './preparateur.service';
import { CreatePreparateurDto } from './dto/create-preparateur.dto';
import { UpdatePreparateurDto } from './dto/update-preparateur.dto';
import { Preparateur } from './preparateur.entity';
import { AuthPreparateurService } from '../auth-preparateur/auth-preparateur.service';
export declare class PreparateurController {
    private readonly preparateurService;
    private readonly authPreparateurService;
    constructor(preparateurService: PreparateurService, authPreparateurService: AuthPreparateurService);
    create(createPreparateurDto: CreatePreparateurDto): Promise<Preparateur>;
    findAll(): Promise<Preparateur[]>;
    update(id: number, updatePreparateurDto: UpdatePreparateurDto): Promise<Preparateur>;
    findOne(id: number): Promise<Preparateur>;
    remove(id: number): Promise<{
        message: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<any>;
    getProfile(req: any): any;
}
