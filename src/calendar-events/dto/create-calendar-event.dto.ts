import { IsBoolean, IsDateString, IsNotEmpty, IsString } from "class-validator";

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

    @IsBoolean()
    all_day?: boolean;

    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsString()
    color?: string;
}
