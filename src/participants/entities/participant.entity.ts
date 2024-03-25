import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Participant extends Document {

  @Prop( { required: true })  
  firstname: string;

  @Prop( { required: true })
  lastname: string;

  @Prop({ minlength: 8, required: true })
  password: string;

  @Prop( { required: true })  
  email: string;

  @Prop( { required: true })  
  phone: string;

  @Prop( { unique: true, index: true, required: true })  
  location: string;

  @Prop( { required: true })
  distance: string;
}
export const ParticipantsSchema = SchemaFactory.createForClass(Participant);
