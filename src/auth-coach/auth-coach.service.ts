import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coach } from '../coach/coach.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthCoachService {
  constructor(
    @InjectRepository(Coach)
    private coachRepo: Repository<Coach>,
    private jwtService: JwtService,
  ) {}

  async validateCoach(email: string, password: string): Promise<any> {
    const coach = await this.coachRepo.findOne({ where: { email } });
    if (!coach) throw new UnauthorizedException('Email incorrect');

    const isMatch = await bcrypt.compare(password, coach.password);
    if (!isMatch) throw new UnauthorizedException('Mot de passe incorrect');

    const payload = { email: coach.email, sub: coach.id, role: 'coach' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
