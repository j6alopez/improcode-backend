import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MapLocation extends Document {

  @Prop( { required: true })  
  lng: number;

  @Prop( { required: true })  
  lat: number;

  @Prop( { required: true })  
  zoom: number;

}

export const MapLocationsSchema = SchemaFactory.createForClass(MapLocation);

MapLocationsSchema.index( { lng: 1, lat: 1}, { unique: true});


