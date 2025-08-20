import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kine } from './kine.entity';
import { KineService } from './kine.service';
import { KineController } from './kine.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Kine])],
  controllers: [KineController],
  providers: [KineService],
})
export class KineModule {}
