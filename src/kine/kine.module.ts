import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kine } from './kine.entity';
import { KineService } from './kine.service';
import { KineController } from './kine.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthKineService } from '../auth-kine/auth-kine.service';
import { KineJwtStrategy } from '../auth-kine/kine-jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Kine]),
    JwtModule.register({
      secret: 'kineSecretKey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [KineController],
  providers: [KineService, AuthKineService, KineJwtStrategy],
  exports: [KineService],
})
export class KineModule {}
