import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joueur } from '../joueur/joueur.entity';
import { AuthJoueurService } from './auth-joueur.service';
import { JwtModule } from '@nestjs/jwt';
import { JoueurJwtStrategy } from './joueur-jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Joueur]),
    JwtModule.register({
      secret: 'joueurSecretKey', // 🔐 à déplacer dans le .env si besoin
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthJoueurService, JoueurJwtStrategy],
  exports: [AuthJoueurService],
})
export class AuthJoueurModule {}
