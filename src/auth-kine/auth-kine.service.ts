import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kine } from '../kine/kine.entity';

@Injectable()
export class AuthKineService {
  constructor(
    @InjectRepository(Kine)
    private readonly kineRepository: Repository<Kine>,
    private readonly jwtService: JwtService,
  ) {}

  async validateKine(email: string, password: string) {
    const kine = await this.kineRepository.findOne({ where: { email } });
    if (!kine) throw new UnauthorizedException('Email incorrect');

    const passwordMatch = await bcrypt.compare(password, kine.password);
    if (!passwordMatch) throw new UnauthorizedException('Mot de passe incorrect');

    const payload = { sub: kine.id, email: kine.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
