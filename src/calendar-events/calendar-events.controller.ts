import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus, HttpCode } from '@nestjs/common';
import { CalendarEventsService } from './calendar-events.service';
import { CreateCalendarEventDto } from './dto/create-calendar-event.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ParseMongoIdPipe } from 'src/common/parse-mongo-id/parse-mongo-id.pipe';
import { UpdateCalendarEventDto } from './dto/update-calendar-event.dto';

@Controller('calendar-events')
export class CalendarEventsController {
  constructor(private readonly calendarEventsService: CalendarEventsService) {}

  @Post()
  create(@Body() createCalendarEventDto: CreateCalendarEventDto) {
    return this.calendarEventsService.create(createCalendarEventDto);
  }

  @Get()
  findAll( @Query() paginationDto: PaginationDto) {
    return this.calendarEventsService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.calendarEventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseMongoIdPipe) id: string, @Body() updateCalendarEventDto: UpdateCalendarEventDto) {
    return this.calendarEventsService.update(id, updateCalendarEventDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.calendarEventsService.remove(id);
  }
}
