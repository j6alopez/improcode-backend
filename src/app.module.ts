import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CalendarEventsModule } from './calendar-events/calendar-events.module';
import { CommonModule } from './common/common.module';
import { FinancialTransactionsModule } from './financial-transactions/financial-transactions.module';
import { MapLocationsModule } from './map-locations/map-locations.module';
import { ParticipantsModule } from './participants/participants.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot( process.env.MONGO_URI ),
    CalendarEventsModule,
    CommonModule,
    FinancialTransactionsModule,
    MapLocationsModule,
    ParticipantsModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
