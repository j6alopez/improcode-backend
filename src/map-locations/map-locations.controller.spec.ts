import { Test, TestingModule } from '@nestjs/testing';
import { MapLocationsController } from './map-locations.controller';
import { MapLocationsService } from './map-locations.service';

describe('MapLocationsController', () => {
  let controller: MapLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapLocationsController],
      providers: [MapLocationsService],
    }).compile();

    controller = module.get<MapLocationsController>(MapLocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
