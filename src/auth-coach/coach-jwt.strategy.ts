import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class CoachJwtStrategy extends PassportStrategy(Strategy, 'coach-jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'coachSecretKey', // tu peux le mettre dans un .env
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}
