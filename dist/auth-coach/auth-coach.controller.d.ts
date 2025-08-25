import { AuthCoachService } from '../auth-coach/auth-coach.service';
export declare class CoachController {
    private readonly authCoachService;
    constructor(authCoachService: AuthCoachService);
    login(body: {
        email: string;
        password: string;
    }): Promise<any>;
}
