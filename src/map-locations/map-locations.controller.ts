import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { MapLocationsService } from './map-locations.service';
import { CreateMapLocationDto } from './dto/create-map-location.dto';
import { UpdateMapLocationDto } from './dto/update-map-location.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ParseMongoIdPipe } from 'src/common/parse-mongo-id/parse-mongo-id.pipe';

@Controller('map-locations')
export class MapLocationsController {
  constructor(private readonly mapLocationsService: MapLocationsService) {}

  @Post()
  create(@Body() createMapLocationDto: CreateMapLocationDto) {
    return this.mapLocationsService.create(createMapLocationDto);
  }

  @Get()
  findAll( @Query() paginationDto: PaginationDto) {
    return this.mapLocationsService.findAll(paginationDto);
  }

  @Get(':id', )
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.mapLocationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseMongoIdPipe) id: string, @Body() updateMapLocationDto: UpdateMapLocationDto) {
    return this.mapLocationsService.update(id, updateMapLocationDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.mapLocationsService.remove(id);
  }
}
