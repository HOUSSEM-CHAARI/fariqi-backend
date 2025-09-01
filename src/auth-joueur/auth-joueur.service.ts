import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joueur } from '../joueur/joueur.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthJoueurService {
  constructor(
    @InjectRepository(Joueur)
    private joueurRepo: Repository<Joueur>,
    private jwtService: JwtService,
  ) {}

  async validateJoueur(email: string, password: string): Promise<any> {
    const joueur = await this.joueurRepo.findOne({ where: { email } });
    if (!joueur) throw new UnauthorizedException('Email incorrect');

    const isMatch = await bcrypt.compare(password, joueur.password);
    if (!isMatch) throw new UnauthorizedException('Mot de passe incorrect');

    const payload = { email: joueur.email, sub: joueur.id, role: 'joueur' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
