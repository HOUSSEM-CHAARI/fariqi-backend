import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preparateur } from '../preparateur/preparateur.entity';
import { AuthPreparateurService } from './auth-preparateur.service';
import { JwtModule } from '@nestjs/jwt';
import { PreparateurJwtStrategy } from './preparateur-jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Preparateur]),
    JwtModule.register({
      secret: 'preparateurSecretKey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthPreparateurService, PreparateurJwtStrategy],
  exports: [AuthPreparateurService],
})
export class AuthPreparateurModule {}
