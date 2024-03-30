import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class CalendarEvent extends Document {

  @Prop( { required: true })  
  title: string;

  @Prop()
  description: string;

  @Prop( { required: true })  
  start_date: string ;

  @Prop( { required: true })  
  end_date: string;

  @Prop()  
  all_day: boolean;


  @Prop()
  color?: string;

}

export const CalendarEventsSchema = SchemaFactory.createForClass(CalendarEvent);
