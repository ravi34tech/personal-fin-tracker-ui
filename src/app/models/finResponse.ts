import { Category, Transaction } from './transaction';

export class FinResponse {
  statusCode: number;
  status: string;
  statusMessage: string;
  categoryList: Array<Category>;
  trxnList: Array<Transaction>;
  transaction: Transaction;
  category: Category;

}
