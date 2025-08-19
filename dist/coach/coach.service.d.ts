import { Repository } from 'typeorm';
import { Coach } from './coach.entity';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
export declare class CoachService {
    private coachRepository;
    constructor(coachRepository: Repository<Coach>);
    create(createCoachDto: CreateCoachDto): Promise<Coach>;
    findAll(): Promise<Coach[]>;
    update(id: number, updateCoachDto: UpdateCoachDto): Promise<Coach>;
    findOne(id: number): Promise<Coach>;
    remove(id: number): Promise<void>;
}
