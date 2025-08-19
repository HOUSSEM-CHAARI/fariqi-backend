import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Coach } from './coach.entity';
export declare class CoachController {
    private readonly coachService;
    constructor(coachService: CoachService);
    create(createCoachDto: CreateCoachDto): Promise<Coach>;
    findAll(): Promise<Coach[]>;
    update(id: number, updateCoachDto: UpdateCoachDto): Promise<Coach>;
    findOne(id: number): Promise<Coach>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
