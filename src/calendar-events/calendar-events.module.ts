import { Module } from '@nestjs/common';
import { CalendarEventsService } from './calendar-events.service';
import { CalendarEventsController } from './calendar-events.controller';
import { CalendarEvent, CalendarEventsSchema } from './entities/calendar-event.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [CalendarEventsController],
  providers: [CalendarEventsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: CalendarEvent.name,
        schema: CalendarEventsSchema
      }
    ])
  ]

})
export class CalendarEventsModule {}
