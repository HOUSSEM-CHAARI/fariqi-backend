import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { KineService } from './kine.service';
import { CreateKineDto } from './dto/create-kine.dto';
import { UpdateKineDto } from './dto/update-kine.dto';
import { Kine } from './kine.entity';

@Controller('kine')
export class KineController {
  constructor(private readonly kineService: KineService) {}

  @Post()
  create(@Body() dto: CreateKineDto): Promise<Kine> {
    return this.kineService.create(dto);
  }

  @Get()
  findAll(): Promise<Kine[]> {
    return this.kineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Kine> {
    return this.kineService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateKineDto): Promise<Kine> {
    return this.kineService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.kineService.remove(+id).then(() => ({
      message: `Kiné avec l'id ${id} supprimé.`,
    }));
  }
}
