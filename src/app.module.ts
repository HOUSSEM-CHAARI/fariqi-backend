// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoachModule } from './coach/coach.module';
import { JoueurModule } from './joueur/joueur.module';
import { KineModule } from './kine/kine.module';
import { PreparateurModule } from './preparateur/preparateur.module';
import { AuthCoachModule } from './auth-coach/auth-coach.module';
import { AuthKineModule } from './auth-kine/auth-kine.module';
import { AuthPreparateurModule } from './auth-preparateur/auth-preparateur.module';
import { AuthJoueurModule } from './auth-joueur/auth-joueur.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'fariqi_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CoachModule,
    JoueurModule,
    KineModule,
    PreparateurModule,
    AuthCoachModule,
    AuthKineModule,
    AuthPreparateurModule,
    AuthJoueurModule,
  ],
})
export class AppModule {}
