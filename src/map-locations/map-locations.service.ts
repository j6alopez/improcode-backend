import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMapLocationDto } from './dto/create-map-location.dto';
import { UpdateMapLocationDto } from './dto/update-map-location.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MapLocation } from './entities/map-location.entity';
import { Model } from 'mongoose';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class MapLocationsService {

  constructor(
    @InjectModel(MapLocation.name)
    private readonly mapLocationModel: Model<MapLocation>
  ) { }

  async create(createMapLocationDto: CreateMapLocationDto): Promise<MapLocation> {
    try {
      const mapLocation: MapLocation = await this.mapLocationModel.create(createMapLocationDto);
      const { __v, ..._mapLocation } = mapLocation.toJSON();
      return _mapLocation as MapLocation;

    } catch (error) {
      this.handleException(error);
    }
  }

  findAll( paginationDto: PaginationDto ): Promise<MapLocation[]> {
    const {limit = 10, offset = 0 } = paginationDto;
    return this.mapLocationModel.find()
      .limit(limit)
      .skip(offset)
      .select(['-__v' ]);
  }

  async findOne(id: string) : Promise<MapLocation> {
    const mapLocation: MapLocation =  await this.mapLocationModel.findById( id ).select(['-__v']);
    if (!mapLocation) {
      throw new NotFoundException(`MapLocation with id "${id}" not found`)
    }
    return mapLocation;
  }


  async update(id: string, updateMapLocationDto: UpdateMapLocationDto) {
    const mapLocation: MapLocation = await this.findOne(id);  
    try {
      await mapLocation.updateOne(updateMapLocationDto, { new: true });
      return { ...mapLocation.toJSON(), ...updateMapLocationDto };
  
    } catch (error) {
      this.handleException(error);
    }
  }

  async remove(id: string): Promise<void> {
    const { deletedCount } = await this.mapLocationModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new NotFoundException(`MapLocation with ${id} not found`);
    }
    return;
  }

  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`MapLocation exists in db ${JSON.stringify(error.keyValue)}`);
    }
    throw new InternalServerErrorException(`Can't update mapLocation - Check server logs`);
  }

}
