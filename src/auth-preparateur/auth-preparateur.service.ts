import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Preparateur } from '../preparateur/preparateur.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthPreparateurService {
  constructor(
    @InjectRepository(Preparateur)
    private preparateurRepo: Repository<Preparateur>,
    private jwtService: JwtService,
  ) {}

  async validatePreparateur(email: string, password: string): Promise<any> {
    const preparateur = await this.preparateurRepo.findOne({ where: { email } });
    if (!preparateur) throw new UnauthorizedException('Email incorrect');

    const isMatch = await bcrypt.compare(password, preparateur.password);
    if (!isMatch) throw new UnauthorizedException('Mot de passe incorrect');

    const payload = { email: preparateur.email, sub: preparateur.id, role: 'preparateur' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
