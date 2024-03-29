import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Model } from 'mongoose';
import { Participant } from './entities/participant.entity';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationDto } from '../common/dto/pagination.dto';


@Injectable()
export class ParticipantsService {

  constructor(
    @InjectModel(Participant.name)
    private readonly participantModel: Model<Participant>
  ) {
  }

  async create(createParticiopantDto: CreateParticipantDto) : Promise<Participant> {
    try {
      const participant: Participant = await this.participantModel.create(createParticiopantDto);
      const { __v, ..._participant } = participant.toJSON();
      return _participant as Participant;

    } catch (error) {
      this.handleException(error);
    }
  }

  async findAll( paginationDto: PaginationDto ): Promise<Participant[]> {
    const {limit = 10, offset = 0 } = paginationDto;
    return this.participantModel.find()
      .limit(limit)
      .skip(offset)
      .sort( {
        email: 'ascending'
      })
      .select(['-__v', '-password' ]);
    
  }

  async findOne(id: string) : Promise<Participant> {
    const participant: Participant =  await this.participantModel.findById( id ).select(['-__v']);
    if (!participant) {
      throw new NotFoundException(`Participant with id "${id}" not found`)
    }
    return participant;
  }

  async update(id: string, updateParticipantDto: UpdateParticipantDto) : Promise<Participant> {

    const participant: Participant = await this.findOne(id);  
    try {
      await participant.updateOne(updateParticipantDto, { new: true });
      return { ...participant.toJSON(), ...updateParticipantDto };
  
    } catch (error) {
      this.handleException(error);
    }

  }

  async remove(id: string): Promise<void> {
    const { deletedCount } = await this.participantModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new NotFoundException(`Participant with ${id} not found`);
    }
    return;
  }

  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`Participant exists in db ${JSON.stringify(error.keyValue)}`);
    }
    throw new InternalServerErrorException(`Can't update participant - Check server logs`);
  }

}
