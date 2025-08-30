import { KineService } from './kine.service';
import { CreateKineDto } from './dto/create-kine.dto';
import { UpdateKineDto } from './dto/update-kine.dto';
import { Kine } from './kine.entity';
import { AuthKineService } from '../auth-kine/auth-kine.service';
export declare class KineController {
    private readonly kineService;
    private readonly authKineService;
    constructor(kineService: KineService, authKineService: AuthKineService);
    create(createKineDto: CreateKineDto): Promise<Kine>;
    findAll(): Promise<Kine[]>;
    update(id: number, updateKineDto: UpdateKineDto): Promise<Kine>;
    findOne(id: number): Promise<Kine>;
    remove(id: number): Promise<{
        message: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
