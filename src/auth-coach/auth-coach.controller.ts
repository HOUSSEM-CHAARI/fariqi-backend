import { Body, Controller, Post } from '@nestjs/common';
import { AuthCoachService } from '../auth-coach/auth-coach.service';

@Controller('coach')
export class CoachController {
  constructor(private readonly authCoachService: AuthCoachService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authCoachService.validateCoach(body.email, body.password);
  }
}
