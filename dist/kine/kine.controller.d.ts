import { KineService } from './kine.service';
import { CreateKineDto } from './dto/create-kine.dto';
import { UpdateKineDto } from './dto/update-kine.dto';
import { Kine } from './kine.entity';
export declare class KineController {
    private readonly kineService;
    constructor(kineService: KineService);
    create(dto: CreateKineDto): Promise<Kine>;
    findAll(): Promise<Kine[]>;
    findOne(id: string): Promise<Kine>;
    update(id: string, dto: UpdateKineDto): Promise<Kine>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
