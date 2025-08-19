import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joueur } from './joueur.entity';
import { JoueurService } from './joueur.service';
import { JoueurController } from './joueur.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Joueur])],
  controllers: [JoueurController],
  providers: [JoueurService],
  exports: [JoueurService],
})
export class JoueurModule {}
