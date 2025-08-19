import { Controller, Post, Body, Get , Put ,Param , Delete } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Coach } from './coach.entity';

@Controller('coach')
export class CoachController {
  constructor(private readonly coachService: CoachService) {}

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
  return this.coachService.findOne(+id); // Convertir id string → number
}

@Delete(':id')
async remove(@Param('id') id: number): Promise<{ message: string }> {
  await this.coachService.remove(id);
  return { message: `Coach avec l'id ${id} supprimé.` };
}
}
