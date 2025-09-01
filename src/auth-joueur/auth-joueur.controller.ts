import { Body, Controller, Post } from '@nestjs/common';
import { AuthJoueurService } from '../auth-joueur/auth-joueur.service';

@Controller('joueur')
export class JoueurController {
  constructor(private readonly authJoueurService: AuthJoueurService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authJoueurService.validateJoueur(body.email, body.password);
  }
}
