import { Repository } from 'typeorm';
import { Preparateur } from './preparateur.entity';
import { CreatePreparateurDto } from './dto/create-preparateur.dto';
import { UpdatePreparateurDto } from './dto/update-preparateur.dto';
export declare class PreparateurService {
    private preparateurRepository;
    constructor(preparateurRepository: Repository<Preparateur>);
    create(createPreparateurDto: CreatePreparateurDto): Promise<Preparateur>;
    findAll(): Promise<Preparateur[]>;
    findOne(id: number): Promise<Preparateur>;
    update(id: number, updatePreparateurDto: UpdatePreparateurDto): Promise<Preparateur>;
    remove(id: number): Promise<void>;
}
