import { Controller, Post, Body, Get, Put, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { JoueurService } from './joueur.service';
import { CreateJoueurDto } from './dto/create-joueur.dto';
import { UpdateJoueurDto } from './dto/update-joueur.dto';
import { Joueur } from './joueur.entity';

import { AuthGuard } from '@nestjs/passport';
import { AuthJoueurService } from '../auth-joueur/auth-joueur.service';

@Controller('joueur')
export class JoueurController {
  constructor(
    private readonly joueurService: JoueurService,
    private readonly authJoueurService: AuthJoueurService,
  ) {}

  @Post()
  async create(@Body() createJoueurDto: CreateJoueurDto): Promise<Joueur> {
    return this.joueurService.create(createJoueurDto);
  }

  @Get()
  async findAll(): Promise<Joueur[]> {
    return this.joueurService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateJoueurDto: UpdateJoueurDto,
  ): Promise<Joueur> {
    return this.joueurService.update(id, updateJoueurDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Joueur> {
    return this.joueurService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    await this.joueurService.remove(id);
    return { message: `joueur avec l'id ${id} supprimé.` };
  }

  // 🔐 Auth route
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authJoueurService.validateJoueur(body.email, body.password);
  }

  @UseGuards(AuthGuard('joueur-jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
