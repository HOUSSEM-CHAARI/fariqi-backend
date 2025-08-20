import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { PreparateurService } from './preparateur.service';
import { CreatePreparateurDto } from './dto/create-preparateur.dto';
import { UpdatePreparateurDto } from './dto/update-preparateur.dto';
import { Preparateur } from './preparateur.entity';

@Controller('preparateur')
export class PreparateurController {
  constructor(private readonly preparateurService: PreparateurService) {}

  @Post()
  create(@Body() dto: CreatePreparateurDto): Promise<Preparateur> {
    return this.preparateurService.create(dto);
  }

  @Get()
  findAll(): Promise<Preparateur[]> {
    return this.preparateurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Preparateur> {
    return this.preparateurService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePreparateurDto): Promise<Preparateur> {
    return this.preparateurService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.preparateurService.remove(+id).then(() => ({
      message: `Préparateur avec l'id ${id} supprimé.`,
    }));
  }
}
