import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coach } from '../coach/coach.entity';
import { AuthCoachService } from './auth-coach.service';
import { JwtModule } from '@nestjs/jwt';
import { CoachJwtStrategy } from './coach-jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coach]),
    JwtModule.register({
      secret: 'coachSecretKey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthCoachService, CoachJwtStrategy],
  exports: [AuthCoachService],
})
export class AuthCoachModule {}
