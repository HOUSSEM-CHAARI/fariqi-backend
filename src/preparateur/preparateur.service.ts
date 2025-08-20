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

  async create(dto: CreatePreparateurDto): Promise<Preparateur> {
    const existing = await this.preparateurRepository.findOne({ where: { email: dto.email } });
    if (existing) throw new Error('Email déjà utilisé');

    const hash = await bcrypt.hash(dto.password, 10);
    const preparateur = this.preparateurRepository.create({ ...dto, password: hash });
    return this.preparateurRepository.save(preparateur);
  }

  findAll(): Promise<Preparateur[]> {
    return this.preparateurRepository.find();
  }

  async findOne(id: number): Promise<Preparateur> {
    const user = await this.preparateurRepository.findOne({ where: { id } });
    if (!user) throw new Error('Préparateur introuvable');
    return user;
  }

  async update(id: number, dto: UpdatePreparateurDto): Promise<Preparateur> {
    const user = await this.findOne(id);
    if (dto.password) {
      dto.password = await bcrypt.hash(dto.password, 10);
    }
    const updated = this.preparateurRepository.merge(user, dto);
    return this.preparateurRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.preparateurRepository.remove(user);
  }
}
