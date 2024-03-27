import { Module } from '@nestjs/common';
import { MapLocationsService } from './map-locations.service';
import { MapLocationsController } from './map-locations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MapLocation, MapLocationsSchema } from './entities/map-location.entity';

@Module({
  controllers: [MapLocationsController],
  providers: [MapLocationsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: MapLocation.name,
        schema: MapLocationsSchema
      }
    ])
  ]
})
export class MapLocationsModule {}
