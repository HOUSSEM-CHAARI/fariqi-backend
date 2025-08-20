import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preparateur } from './preparateur.entity';
import { PreparateurService } from './preparateur.service';
import { PreparateurController } from './preparateur.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Preparateur])],
  controllers: [PreparateurController],
  providers: [PreparateurService],
  exports: [PreparateurService],
})
export class PreparateurModule {}
