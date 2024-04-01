import { IsNotEmpty, IsNumber, IsString, isNotEmpty } from "class-validator";

export class CreateMapLocationDto {

  @IsNotEmpty()
  @IsNumber()
  lng: number;

  @IsNotEmpty()
  @IsNumber()
  lat: number;
  
  @IsNotEmpty()
  @IsNumber()
  zoom: number;

  @IsNotEmpty()
  @IsString()
  color: string;
}
