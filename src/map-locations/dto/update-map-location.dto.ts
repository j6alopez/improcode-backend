import { PartialType } from '@nestjs/mapped-types';
import { CreateMapLocationDto } from './create-map-location.dto';

export class UpdateMapLocationDto extends PartialType(CreateMapLocationDto) {}
