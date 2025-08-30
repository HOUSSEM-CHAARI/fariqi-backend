import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preparateur } from './preparateur.entity';
import { PreparateurService } from './preparateur.service';
import { PreparateurController } from './preparateur.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthPreparateurService } from '../auth-preparateur/auth-preparateur.service';
import { PreparateurJwtStrategy } from '../auth-preparateur/preparateur-jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Preparateur]),
    JwtModule.register({
      secret: 'preparateurSecretKey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [PreparateurController],
  providers: [PreparateurService, AuthPreparateurService, PreparateurJwtStrategy],
  exports: [PreparateurService],
})
export class PreparateurModule {}
