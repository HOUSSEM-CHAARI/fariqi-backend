import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { JoueurService } from './joueur.service';
import { CreateJoueurDto } from './dto/create-joueur.dto';
import { UpdateJoueurDto } from './dto/update-joueur.dto';
import { Joueur } from './joueur.entity';

@Controller('joueur')
export class JoueurController {
  constructor(private readonly joueurService: JoueurService) {}

  @Post()
  async create(@Body() dto: CreateJoueurDto): Promise<Joueur> {
    return this.joueurService.create(dto);
  }

  @Get()
  findAll(): Promise<Joueur[]> {
    return this.joueurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Joueur> {
    return this.joueurService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateJoueurDto): Promise<Joueur> {
    return this.joueurService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.joueurService.remove(+id).then(() => ({
      message: `Joueur avec l'id ${id} supprimé.`,
    }));
  }
}
