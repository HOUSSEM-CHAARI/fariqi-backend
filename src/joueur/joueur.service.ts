import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joueur } from './joueur.entity';
import { CreateJoueurDto } from './dto/create-joueur.dto';
import { UpdateJoueurDto } from './dto/update-joueur.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class JoueurService {
  constructor(
    @InjectRepository(Joueur)
    private joueurRepository: Repository<Joueur>,
  ) {}

  async create(createJoueurDto: CreateJoueurDto): Promise<Joueur> {
    const { first_name, last_name, email, password } = createJoueurDto;

    // Vérifier si l'email existe déjà
    const existing = await this.joueurRepository.findOne({ where: { email } });
    if (existing) throw new Error('Email déjà utilisé');

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const joueur = this.joueurRepository.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

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

  async update(id: number, updateJoueurDto: UpdateJoueurDto): Promise<Joueur> {
    const joueur = await this.joueurRepository.findOne({ where: { id } });
    if (!joueur) throw new Error('Joueur introuvable');

    const updated = this.joueurRepository.merge(joueur, updateJoueurDto);
    return this.joueurRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const joueur = await this.joueurRepository.findOne({ where: { id } });
    if (!joueur) throw new Error('Joueur introuvable');

    await this.joueurRepository.delete(id);
  }
}
