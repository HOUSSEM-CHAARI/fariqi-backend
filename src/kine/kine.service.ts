import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kine } from './kine.entity';
import { CreateKineDto } from './dto/create-kine.dto';
import { UpdateKineDto } from './dto/update-kine.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class KineService {
  constructor(
    @InjectRepository(Kine)
    private kineRepository: Repository<Kine>,
  ) {}

  async create(createKineDto: CreateKineDto): Promise<Kine> {
    const { first_name, last_name, email, password } = createKineDto;

    // Vérifier si l'email existe déjà
    const existing = await this.kineRepository.findOne({ where: { email } });
    if (existing) throw new Error('Email déjà utilisé');

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const kine = this.kineRepository.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    return this.kineRepository.save(kine);
  }

  // Récupérer tous les kinés
  findAll(): Promise<Kine[]> {
    return this.kineRepository.find();
  }

  // Récupérer un kiné par ID
  async findOne(id: number): Promise<Kine> {
    const kine = await this.kineRepository.findOne({ where: { id } });
    if (!kine) {
      throw new Error('Kiné introuvable');
    }
    return kine;
  }

  // Mise à jour d'un kiné
  async update(id: number, updateKineDto: UpdateKineDto): Promise<Kine> {
    const kine = await this.kineRepository.findOne({ where: { id } });
    if (!kine) {
      throw new Error('Kiné introuvable');
    }

    const updatedKine = this.kineRepository.merge(kine, updateKineDto);
    return this.kineRepository.save(updatedKine);
  }

  // Suppression d'un kiné
  async remove(id: number): Promise<void> {
    const kine = await this.kineRepository.findOne({ where: { id } });
    if (!kine) {
      throw new Error('Kiné introuvable');
    }

    await this.kineRepository.delete(id);
  }
}
