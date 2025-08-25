import { Controller, Post, Body, Get , Put ,Param , Delete ,Request , UseGuards} from '@nestjs/common';
import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Coach } from './coach.entity';

import { AuthGuard } from '@nestjs/passport';
import { AuthCoachService } from '../auth-coach/auth-coach.service';

@Controller('coach')
export class CoachController {
  constructor(
    private readonly coachService: CoachService,
    private readonly authCoachService: AuthCoachService,
  ) {}

  @Post()
  async create(@Body() createCoachDto: CreateCoachDto): Promise<Coach> {
    return this.coachService.create(createCoachDto);
  }

  @Get()
  async findAll(): Promise<Coach[]> {
    return this.coachService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCoachDto: UpdateCoachDto,
  ): Promise<Coach> {
    return this.coachService.update(id, updateCoachDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Coach> {
    return this.coachService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    await this.coachService.remove(id);
    return { message: `coach avec l'id ${id} supprimé.` };
  }

  // 🔐 Auth route
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authCoachService.validateCoach(body.email, body.password);
  }

  @UseGuards(AuthGuard('coach-jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

