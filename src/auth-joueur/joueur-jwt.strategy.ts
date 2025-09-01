import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JoueurJwtStrategy extends PassportStrategy(Strategy, 'joueur-jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'joueurSecretKey', // 🔐 à placer dans un .env
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}
