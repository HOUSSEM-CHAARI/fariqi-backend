import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class KineJwtStrategy extends PassportStrategy(Strategy, 'kine-jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'kineSecretKey',
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}
