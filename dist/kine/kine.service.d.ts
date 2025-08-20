import { Repository } from 'typeorm';
import { Kine } from './kine.entity';
import { CreateKineDto } from './dto/create-kine.dto';
import { UpdateKineDto } from './dto/update-kine.dto';
export declare class KineService {
    private kineRepository;
    constructor(kineRepository: Repository<Kine>);
    create(dto: CreateKineDto): Promise<Kine>;
    findAll(): Promise<Kine[]>;
    findOne(id: number): Promise<Kine>;
    update(id: number, dto: UpdateKineDto): Promise<Kine>;
    remove(id: number): Promise<void>;
}
