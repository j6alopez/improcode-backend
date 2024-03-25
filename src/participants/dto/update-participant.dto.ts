import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipantDto } from './create-participant.dto';

export class UpdateParticpantDto extends PartialType(CreateParticipantDto) {}
