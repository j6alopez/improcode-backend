import { IsCurrency, IsDateString, IsISO4217CurrencyCode, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { TransactionType } from "../enums/transcation-type.enum";
import { Transform, TransformFnParams } from "class-transformer";

export class CreateFinancialTransactionDto {

  @IsNotEmpty()
  @IsString()
  type: TransactionType;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsString()
  @IsISO4217CurrencyCode()
  @Transform(({ value }: TransformFnParams) => value || 'EUR')
  currency: string;

  @IsNotEmpty()
  @IsString()
  concept: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  notes?: string;

}
