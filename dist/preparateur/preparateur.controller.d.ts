import { PreparateurService } from './preparateur.service';
import { CreatePreparateurDto } from './dto/create-preparateur.dto';
import { UpdatePreparateurDto } from './dto/update-preparateur.dto';
import { Preparateur } from './preparateur.entity';
export declare class PreparateurController {
    private readonly preparateurService;
    constructor(preparateurService: PreparateurService);
    create(dto: CreatePreparateurDto): Promise<Preparateur>;
    findAll(): Promise<Preparateur[]>;
    findOne(id: string): Promise<Preparateur>;
    update(id: string, dto: UpdatePreparateurDto): Promise<Preparateur>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
