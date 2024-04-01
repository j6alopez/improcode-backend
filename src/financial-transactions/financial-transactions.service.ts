import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { UpdateFinancialTransactionDto } from './dto/update-financial-transaction.dto';
import { FinancialTransaction } from './entities/financial-transaction.entity';
import { CreateFinancialTransactionDto } from './dto/create-financial-transaction.dto';

@Injectable()
export class FinancialTransactionsService {
  constructor(
    @InjectModel( FinancialTransaction.name )
    private readonly financialTransactionModel: Model<FinancialTransaction>
  ) {
  }

  async create( createFinancialTransactionDto: CreateFinancialTransactionDto ): Promise<FinancialTransaction> {
    try {
      const financialTransaction: FinancialTransaction = await this.financialTransactionModel.create( createFinancialTransactionDto );
      console.log(financialTransaction)
      const { __v, ..._financialTransaction } = financialTransaction.toJSON();
      return _financialTransaction as FinancialTransaction;

    } catch ( error ) {
      this.handleException( error );
    }
  }

  async findAll( paginationDto: PaginationDto ): Promise<FinancialTransaction[]> {
    const { limit = 10, offset = 0 } = paginationDto;
    return this.financialTransactionModel.find()
      .limit( limit )
      .skip( offset )
      .sort( {
        date: 'ascending'
      } )
      .select( [ '-__v', ] );

  }

  async findOne( id: string ): Promise<FinancialTransaction> {
    const financialTransaction: FinancialTransaction = await this.financialTransactionModel.findById( id ).select( [ '-__v' ] );
    if ( !financialTransaction ) {
      throw new NotFoundException( `FinancialTransaction with id "${ id }" not found` )
    }
    return financialTransaction;
  }

  async update( id: string, updateFinancialTransactionDto: UpdateFinancialTransactionDto ): Promise<FinancialTransaction> {

    const financialTransaction: FinancialTransaction = await this.findOne( id );
    try {
      await financialTransaction.updateOne( updateFinancialTransactionDto, { new: true } );
      return { ...financialTransaction.toJSON(), ...updateFinancialTransactionDto };

    } catch ( error ) {
      this.handleException( error );
    }

  }

  async remove( id: string ): Promise<void> {
    const { deletedCount } = await this.financialTransactionModel.deleteOne( { _id: id } );
    if ( deletedCount === 0 ) {
      throw new NotFoundException( `FinancialTransaction with ${ id } not found` );
    }
    return;
  }

  async deleteAll(): Promise<void> {
    await this.financialTransactionModel.deleteMany( {} );
    return;
  }

  private handleException( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException( `FinancialTransaction exists in db ${ JSON.stringify( error.keyValue ) }` );
    }
    throw new InternalServerErrorException( `Can't update FinancialTransaction - Check server logs` );
  }
}
