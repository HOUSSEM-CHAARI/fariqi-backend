import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PreparateurService } from './preparateur.service';
import { CreatePreparateurDto } from './dto/create-preparateur.dto';
import { UpdatePreparateurDto } from './dto/update-preparateur.dto';
import { Preparateur } from './preparateur.entity';

import { AuthGuard } from '@nestjs/passport';
import { AuthPreparateurService } from '../auth-preparateur/auth-preparateur.service';

@Controller('preparateur')
export class PreparateurController {
  constructor(
    private readonly preparateurService: PreparateurService,
    private readonly authPreparateurService: AuthPreparateurService,
  ) {}

  @Post()
  async create(@Body() createPreparateurDto: CreatePreparateurDto): Promise<Preparateur> {
    return this.preparateurService.create(createPreparateurDto);
  }

  @Get()
  async findAll(): Promise<Preparateur[]> {
    return this.preparateurService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePreparateurDto: UpdatePreparateurDto,
  ): Promise<Preparateur> {
    return this.preparateurService.update(id, updatePreparateurDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Preparateur> {
    return this.preparateurService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    await this.preparateurService.remove(id);
    return { message: `Préparateur avec l'id ${id} supprimé.` };
  }

  // 🔐 Auth route
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authPreparateurService.validatePreparateur(body.email, body.password);
  }

  @UseGuards(AuthGuard('preparateur-jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
