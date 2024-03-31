import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { FinancialTransactionsModule } from 'src/financial-transactions/financial-transactions.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    FinancialTransactionsModule
  ]
})
export class SeedModule {}
