import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Preparateur } from './preparateur.entity';
import { CreatePreparateurDto } from './dto/create-preparateur.dto';
import { UpdatePreparateurDto } from './dto/update-preparateur.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PreparateurService {
  constructor(
    @InjectRepository(Preparateur)
    private preparateurRepository: Repository<Preparateur>,
  ) {}

  async create(createPreparateurDto: CreatePreparateurDto): Promise<Preparateur> {
    const { first_name, last_name, email, password } = createPreparateurDto;

    // Vérifier si l'email existe déjà
    const existing = await this.preparateurRepository.findOne({ where: { email } });
    if (existing) throw new Error('Email déjà utilisé');

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const preparateur = this.preparateurRepository.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    return this.preparateurRepository.save(preparateur);
  }

  // Récupérer tous les préparateurs
  findAll(): Promise<Preparateur[]> {
    return this.preparateurRepository.find();
  }

  // Récupérer un préparateur par ID
  async findOne(id: number): Promise<Preparateur> {
    const preparateur = await this.preparateurRepository.findOne({ where: { id } });
    if (!preparateur) {
      throw new Error('Préparateur introuvable');
    }
    return preparateur;
  }

  // Mise à jour d'un préparateur
  async update(id: number, updatePreparateurDto: UpdatePreparateurDto): Promise<Preparateur> {
    const preparateur = await this.preparateurRepository.findOne({ where: { id } });
    if (!preparateur) {
      throw new Error('Préparateur introuvable');
    }

    const updated = this.preparateurRepository.merge(preparateur, updatePreparateurDto);
    return this.preparateurRepository.save(updated);
  }

  // Suppression d'un préparateur
  async remove(id: number): Promise<void> {
    const preparateur = await this.preparateurRepository.findOne({ where: { id } });
    if (!preparateur) {
      throw new Error('Préparateur introuvable');
    }

    await this.preparateurRepository.delete(id);
  }
}
