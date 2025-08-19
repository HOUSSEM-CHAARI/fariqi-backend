import { PartialType } from '@nestjs/mapped-types';
import { CreateJoueurDto } from './create-joueur.dto';

export class UpdateJoueurDto extends PartialType(CreateJoueurDto) {}
