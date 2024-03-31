import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus, HttpCode } from '@nestjs/common';

import { CreateFinancialTransactionDto } from './dto/create-financial-transaction.dto';
import { FinancialTransactionsService } from './financial-transactions.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ParseMongoIdPipe } from 'src/common/parse-mongo-id/parse-mongo-id.pipe';
import { UpdateFinancialTransactionDto } from './dto/update-financial-transaction.dto';

@Controller('financial-transactions')
export class FinancialTransactionsController {
  constructor(private readonly financialTransactionsService: FinancialTransactionsService) {}

  @Post()
  create(@Body() createFinancialTransactionDto: CreateFinancialTransactionDto) {
    return this.financialTransactionsService.create(createFinancialTransactionDto);
  }

  @Get()
  findAll( @Query() paginationDto: PaginationDto) {
    return this.financialTransactionsService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.financialTransactionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseMongoIdPipe) id: string, @Body() updatefinancialTransactionDto: UpdateFinancialTransactionDto) {
    return this.financialTransactionsService.update(id, updatefinancialTransactionDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.financialTransactionsService.remove(id);
  }
}
