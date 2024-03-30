import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CalendarEventsModule } from './calendar-events/calendar-events.module';
import { CommonModule } from './common/common.module';
import { MapLocationsModule } from './map-locations/map-locations.module';
import { ParticipantsModule } from './participants/participants.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot( process.env.MONGO_URI ),
    CalendarEventsModule,
    CommonModule,
    MapLocationsModule,
    ParticipantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
