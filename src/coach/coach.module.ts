import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coach } from './coach.entity';
import { CoachService } from './coach.service';
import { CoachController } from './coach.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthCoachService } from '../auth-coach/auth-coach.service';
import { CoachJwtStrategy } from '../auth-coach/coach-jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coach]),
    JwtModule.register({
      secret: 'coachSecretKey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [CoachController],
  providers: [CoachService, AuthCoachService, CoachJwtStrategy],
  exports: [CoachService],
})
export class CoachModule {}
