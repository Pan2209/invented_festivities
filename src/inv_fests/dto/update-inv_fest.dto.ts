import { PartialType } from '@nestjs/mapped-types';
import { CreateInvFestDto } from './create-inv_fest.dto';

export class UpdateInvFestDto extends PartialType(CreateInvFestDto) {}
