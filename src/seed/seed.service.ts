import { Injectable } from '@nestjs/common';
import { FinancialTransactionsService } from '../financial-transactions/financial-transactions.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {

  constructor(
    private readonly financialTransactionService: FinancialTransactionsService
  ) { }

  async runSeed() {
    await this.insertNewFinancialTransactions();
  }

  private async insertNewFinancialTransactions() {
    await this.financialTransactionService.deleteAll();

    const transactions = initialData.transactions;

    const insertPromises = [];

    transactions.forEach( transaction =>
      insertPromises.push(this.financialTransactionService.create( transaction )) 
    );
    
    await Promise.all(insertPromises);
  }

}
