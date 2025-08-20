import { PartialType } from '@nestjs/mapped-types';
import { CreatePreparateurDto } from './create-preparateur.dto';

export class UpdatePreparateurDto extends PartialType(CreatePreparateurDto) {}
