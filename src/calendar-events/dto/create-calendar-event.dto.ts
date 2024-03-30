import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCalendarEventDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsDateString()

    start_date?: string ;

    @IsNotEmpty()
    @IsDateString()
    end_date?: string;

    @IsOptional()
    @IsBoolean()
    all_day?: boolean;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    color?: string;
}
