import { PartialType } from '@nestjs/mapped-types';
import { CreateKineDto } from './create-kine.dto';

export class UpdateKineDto extends PartialType(CreateKineDto) {}
