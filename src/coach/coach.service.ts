import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coach } from './coach.entity';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CoachService {
  constructor(
    @InjectRepository(Coach)
    private coachRepository: Repository<Coach>,
  ) {}

  async create(createCoachDto: CreateCoachDto): Promise<Coach> {
    const { first_name, last_name, email, password } = createCoachDto;

    // Vérifier si l'email existe déjà
    const existing = await this.coachRepository.findOne({ where: { email } });
    if (existing) throw new Error('Email déjà utilisé');

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const coach = this.coachRepository.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    return this.coachRepository.save(coach);
  }

  // (optionnel) liste de tous les coaches
  findAll(): Promise<Coach[]> {
    return this.coachRepository.find();
  }
  async update(id: number, updateCoachDto: UpdateCoachDto): Promise<Coach> {
  const coach = await this.coachRepository.findOne({ where: { id } });
  if (!coach) {
    throw new Error('Coach introuvable');
  }

  // Merge les nouvelles valeurs dans l'entité
  const updatedCoach = this.coachRepository.merge(coach, updateCoachDto);
  return this.coachRepository.save(updatedCoach);
}
// Récupérer tous les coaches
// Récupérer un coach par ID
async findOne(id: number): Promise<Coach> {
  const coach = await this.coachRepository.findOne({ where: { id } });
  if (!coach) {
    throw new Error('Coach introuvable');
  }
  return coach;
}

async remove(id: number): Promise<void> {
  const coach = await this.coachRepository.findOne({ where: { id } });

  if (!coach) {
    throw new Error('Coach introuvable');
  }

  await this.coachRepository.delete(id);
}

}
