import { IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateParticipantDto {

  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(9)
  phone: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  distance: string;
}
