
export class Transaction {
  id: number;
  description: string;
  amount: number;
  purchasedDate: Date;
  trxType: number;
  category: Category;
}

export class Category {
  id: number;
  name: string;
  colorCode: string;
}

export class SearchCriteria {
  categoryId: number;
  trxntype: number;
  description: string;
  fromDate: Date;
  toDate: Date;
}
