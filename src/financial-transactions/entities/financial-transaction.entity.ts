import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { TransactionType } from "../enums/transcation-type.enum";
import { Document } from 'mongoose';

@Schema()
export class FinancialTransaction extends Document {

  @Prop( { required: true } )
  type: TransactionType;

  @Prop( { required: true } )
  amount: number;

  @Prop( { required: true})
  currency: string;

  @Prop( { required: true } )
  concept: string;

  @Prop( { required: true } )
  date: string;

  @Prop()
  category?: string;

  @Prop()
  location?: string;

  @Prop()
  notes?: string;

}
export const FinancialTranscationsSchema = SchemaFactory.createForClass( FinancialTransaction );
