import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Kine } from '../kine/kine.entity';
import { AuthKineService } from './auth-kine.service';
import { KineJwtStrategy } from './kine-jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Kine]),
    JwtModule.register({
      secret: 'kineSecretKey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthKineService, KineJwtStrategy],
  exports: [AuthKineService],
})
export class AuthKineModule {}
