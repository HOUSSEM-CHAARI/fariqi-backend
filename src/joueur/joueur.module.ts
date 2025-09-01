import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joueur } from './joueur.entity';
import { JoueurService } from './joueur.service';
import { JoueurController } from './joueur.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthJoueurService } from '../auth-joueur/auth-joueur.service';
import { JoueurJwtStrategy } from '../auth-joueur/joueur-jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Joueur]),
    JwtModule.register({
      secret: 'joueurSecretKey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [JoueurController],
  providers: [JoueurService, AuthJoueurService, JoueurJwtStrategy],
  exports: [JoueurService],
})
export class JoueurModule {}
