import { Module } from '@nestjs/common';
import { FinancialTransactionsService } from './financial-transactions.service';
import { FinancialTransactionsController } from './financial-transactions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FinancialTransaction, FinancialTranscationsSchema } from './entities/financial-transaction.entity';

@Module( {
  controllers: [ FinancialTransactionsController ],
  providers: [ FinancialTransactionsService ],
  imports: [
    MongooseModule.forFeature( [
      {
        name: FinancialTransaction.name,
        schema: FinancialTranscationsSchema
      }
    ] )
  ],
  exports: [ FinancialTransactionsService ]
} )
export class FinancialTransactionsModule {

}
