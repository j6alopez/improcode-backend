import { Module } from '@nestjs/common';
import { ParticipantsService } from './ParticipantsService';
import { ParticipantsController } from './participants.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Participant, ParticipantsSchema } from './entities/participant.entity';

@Module({
  controllers: [ParticipantsController],
  providers: [ParticipantsService],
  imports: [
    MongooseModule.forFeature( [
      {
        name: Participant.name,
        schema: ParticipantsSchema 
      }
    ])
  ],
})
export class ParticipantsModule {}
