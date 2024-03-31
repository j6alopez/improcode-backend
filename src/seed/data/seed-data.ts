import { TransactionType } from "src/financial-transactions/enums/transcation-type.enum";

interface SeedTransaction {
  type: ValidTypes;
  amount: number;
  concept: string;
  currency: ValidCurrencies;
  date: string;
  category?: string;
  location?: string;
  notes?: string;
}

type ValidCurrencies = 'EUR' | 'USD';
type ValidTypes = TransactionType;


interface SeedData {
  transactions: SeedTransaction[];
}


export const initialData: SeedData = {
  transactions: [
    {
      "type": TransactionType.INCOME,
      "amount": 1000.11,
      "currency": 'EUR',
      "concept": "Salary",
      "date": "2024-03-01"
    },
    {
      "type": TransactionType.EXPENSE,
      "amount": 50,
      "currency": 'EUR',
      "concept": "Groceries",
      "date": "2024-03-05",
      "category": "Food",
      "location": "Grocery Store",
      "notes": "Weekly shopping"
    },
    {
      "type": TransactionType.EXPENSE,
      "amount": 30,
      "currency": 'EUR',
      "concept": "Dinner",
      "date": "2024-03-10",
      "category": "Dining Out",
      "location": "Restaurant A"
    },
    {
      "type": TransactionType.INCOME,
      "amount": 200,
      "currency": 'EUR',
      "concept": "Freelance Work",
      "date": "2024-03-15"
    },
    {
      "type": TransactionType.EXPENSE,
      "amount": 20,
      "currency": 'EUR',
      "concept": "Movie Tickets",
      "date": "2024-03-20",
      "category": "Entertainment",
      "location": "Cinema B"
    },
    {
      "type": TransactionType.EXPENSE,
      "amount": 40,
      "currency": 'EUR',
      "concept": "Gasoline",
      "date": "2024-03-25",
      "category": "Transportation"
    },
    {
      "type": TransactionType.INCOME,
      "amount": 1500,
      "currency": 'EUR',
      "concept": "Bonus",
      "date": "2024-03-28"
    },
    {
      "type": TransactionType.EXPENSE,
      "amount": 100,
      "currency": 'EUR',
      "concept": "Electricity Bill",
      "date": "2024-03-05",
      "category": "Utilities"
    },
    {
      "type": TransactionType.EXPENSE,
      "amount": 80,
      "currency": 'EUR',
      "concept": "Clothing",
      "date": "2024-03-15",
      "category": "Shopping",
      "notes": "New shoes"
    },
    {
      "type": TransactionType.INCOME,
      "amount": 300,
      "currency": 'EUR',
      "concept": "Investment Dividends",
      "date": "2024-03-30"
    }
  ]

}