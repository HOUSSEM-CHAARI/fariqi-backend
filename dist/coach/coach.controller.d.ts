import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Coach } from './coach.entity';
import { AuthCoachService } from '../auth-coach/auth-coach.service';
export declare class CoachController {
    private readonly coachService;
    private readonly authCoachService;
    constructor(coachService: CoachService, authCoachService: AuthCoachService);
    create(createCoachDto: CreateCoachDto): Promise<Coach>;
    findAll(): Promise<Coach[]>;
    update(id: number, updateCoachDto: UpdateCoachDto): Promise<Coach>;
    findOne(id: number): Promise<Coach>;
    remove(id: number): Promise<{
        message: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<any>;
    getProfile(req: any): any;
}
