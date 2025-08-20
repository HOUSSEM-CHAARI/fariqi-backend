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

  async create(dto: CreateKineDto): Promise<Kine> {
    const existing = await this.kineRepository.findOne({ where: { email: dto.email } });
    if (existing) throw new Error('Email déjà utilisé');

    const hash = await bcrypt.hash(dto.password, 10);
    const kine = this.kineRepository.create({ ...dto, password: hash });
    return this.kineRepository.save(kine);
  }

  findAll(): Promise<Kine[]> {
    return this.kineRepository.find();
  }

  async findOne(id: number): Promise<Kine> {
    const kine = await this.kineRepository.findOne({ where: { id } });
    if (!kine) throw new Error('Kiné introuvable');
    return kine;
  }

  async update(id: number, dto: UpdateKineDto): Promise<Kine> {
    const kine = await this.findOne(id);
    if (dto.password) {
      dto.password = await bcrypt.hash(dto.password, 10);
    }
    const updated = this.kineRepository.merge(kine, dto);
    return this.kineRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const kine = await this.findOne(id);
    await this.kineRepository.remove(kine);
  }
}
