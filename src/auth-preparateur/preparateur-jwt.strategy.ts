import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class PreparateurJwtStrategy extends PassportStrategy(Strategy, 'preparateur-jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'preparateurSecretKey', // tu peux le mettre dans un .env
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}
