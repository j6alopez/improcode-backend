import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParticipantsModule } from './participants/participants.module';
import { CommonModule } from './common/common.module';
import { MapLocationsModule } from './map-locations/map-locations.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot( process.env.MONGO_URI ),
    ParticipantsModule,
    CommonModule,
    MapLocationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
