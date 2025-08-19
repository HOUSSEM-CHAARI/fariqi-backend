import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Joueur } from './joueur.entity';
import { Repository } from 'typeorm';
import { CreateJoueurDto } from './dto/create-joueur.dto';
import { UpdateJoueurDto } from './dto/update-joueur.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class JoueurService {
  constructor(
    @InjectRepository(Joueur)
    private joueurRepository: Repository<Joueur>,
  ) {}

  async create(dto: CreateJoueurDto): Promise<Joueur> {
    const existing = await this.joueurRepository.findOne({ where: { email: dto.email } });
    if (existing) throw new Error('Email déjà utilisé');

    const hash = await bcrypt.hash(dto.password, 10);

    const joueur = this.joueurRepository.create({ ...dto, password: hash });
    return this.joueurRepository.save(joueur);
  }

  findAll(): Promise<Joueur[]> {
    return this.joueurRepository.find();
  }

  async findOne(id: number): Promise<Joueur> {
    const joueur = await this.joueurRepository.findOne({ where: { id } });
    if (!joueur) throw new Error('Joueur introuvable');
    return joueur;
  }

  async update(id: number, dto: UpdateJoueurDto): Promise<Joueur> {
    const joueur = await this.findOne(id);

    if (dto.password) {
      dto.password = await bcrypt.hash(dto.password, 10);
    }

    const updated = this.joueurRepository.merge(joueur, dto);
    return this.joueurRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const joueur = await this.findOne(id);
    await this.joueurRepository.remove(joueur);
  }
}
