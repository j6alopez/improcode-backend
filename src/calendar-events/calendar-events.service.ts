import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCalendarEventDto } from './dto/create-calendar-event.dto';
import { UpdateCalendarEventDto } from './dto/update-calendar-event.dto';
import { CalendarEvent } from './entities/calendar-event.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class CalendarEventsService {

  constructor(
    @InjectModel(CalendarEvent.name)
    private readonly CalendarEventModel: Model<CalendarEvent>
  ) {}

  async create(createParticiopantDto: CreateCalendarEventDto) : Promise<CalendarEvent> {
    try {
      const CalendarEvent: CalendarEvent = await this.CalendarEventModel.create(createParticiopantDto);
      const { __v, ..._CalendarEvent } = CalendarEvent.toJSON();
      return _CalendarEvent as CalendarEvent;

    } catch (error) {
      this.handleException(error);
    }
  }

  async findAll( paginationDto: PaginationDto ): Promise<CalendarEvent[]> {
    const {limit = 10, offset = 0 } = paginationDto;
    return this.CalendarEventModel.find()
      .limit(limit)
      .skip(offset)
      .sort( {
        email: 'ascending'
      })
      .select(['-__v' ]);
    
  }

  async findOne(id: string) : Promise<CalendarEvent> {
    const CalendarEvent: CalendarEvent =  await this.CalendarEventModel.findById( id ).select(['-__v']);
    if (!CalendarEvent) {
      throw new NotFoundException(`CalendarEvent with id "${id}" not found`)
    }
    return CalendarEvent;
  }

  async update(id: string, updateCalendarEventDto: UpdateCalendarEventDto) : Promise<CalendarEvent> {

    const CalendarEvent: CalendarEvent = await this.findOne(id);  
    try {
      await CalendarEvent.updateOne(updateCalendarEventDto, { new: true });
      return { ...CalendarEvent.toJSON(), ...updateCalendarEventDto };
  
    } catch (error) {
      this.handleException(error);
    }

  }

  async remove(id: string): Promise<void> {
    const { deletedCount } = await this.CalendarEventModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new NotFoundException(`CalendarEvent with ${id} not found`);
    }
    return;
  }

  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`CalendarEvent exists in db ${JSON.stringify(error.keyValue)}`);
    }
    throw new InternalServerErrorException(`Can't update CalendarEvent - Check server logs`);
  }
}
