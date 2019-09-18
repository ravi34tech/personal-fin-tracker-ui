import { Budget } from './app/models/budget';
import { Category, Transaction } from './app/models/transaction';
import { Summary } from './app/models/summary';

export const mockBudgetList: Budget[] = [
  {
    budgetCategoryName: 'Bill',
    categoryColorCode: '#6610f2',
    totalBudgetAmount: 10000,
    spentAmount: 9000,
    remainingAmount: 1000,
    spentAmountPercentage: 90
  },
  {
    budgetCategoryName: 'Housing',
    categoryColorCode: '#e83e8c',
    totalBudgetAmount: 20000,
    spentAmount: 15000,
    remainingAmount: 5000,
    spentAmountPercentage: 75
  },
  {
    budgetCategoryName: 'Transportation',
    categoryColorCode: '#28a745',
    totalBudgetAmount: 5000,
    spentAmount: 4000,
    remainingAmount: 1000,
    spentAmountPercentage: 85
  },
  {
    budgetCategoryName: 'Shopping',
    categoryColorCode: '#fd7e14',
    totalBudgetAmount: 5000,
    spentAmount: 2000,
    remainingAmount: 3000,
    spentAmountPercentage: 40
  },
  {
    budgetCategoryName: 'Entertainment',
    categoryColorCode: '#343a40',
    totalBudgetAmount: 3000,
    spentAmount: 3000,
    remainingAmount: 0,
    spentAmountPercentage: 100
  }
];

export const mockCategoryList: Category[] = [
    {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    },
    {
      id: 2,
      name: 'Housing',
      colorCode: '#e83e8c'
    },
    {
      id: 3,
      name: 'Transportation',
      colorCode: '#28a745'
    },
    {
      id: 4,
      name: 'Shopping',
      colorCode: '#fd7e14'
    },
    {
      id: 5,
      name: 'Entertainment',
      colorCode: '#343a40'
    },
];

export const mockTransactionList: Transaction[] = [

  {
    id : 1,
    description: 'Movie',
    amount: 150,
    purchasedDate: '10/Sep/2019',
    trxType: 1,
    category: {
      id: 5,
      name: 'Entertainment',
      colorCode: '#343a40'
    },
  },
  {
    id : 2,
    description: 'Shopping did',
    amount: 3400,
    purchasedDate: '9/Sep/2019',
    trxType: 1,
    category: {
      id: 4,
      name: 'Shopping',
      colorCode: '#fd7e14'
    },
  },
  {
    id : 3,
    description: 'Given to Mom',
    amount: 15000,
    purchasedDate: '1/Sep/2019',
    trxType: 1,
    category: {
      id: 3,
      name: 'Transportation',
      colorCode: '#28a745'
    }
  },
  {
    id : 4,
    description: 'House Rent paid',
    amount: 10000,
    purchasedDate: '2/Sep/2019',
    trxType: 1,
    category:  {
      id: 2,
      name: 'Housing',
      colorCode: '#e83e8c'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  },
  {
    id : 5,
    description: 'Dish TV Bill',
    amount: 300,
    purchasedDate: '5/Sep/2019',
    trxType: 1,
    category: {
      id: 1,
      name: 'Bill',
      colorCode: '#6610f2'
    }
  }
];


export const mockSummary: Summary = {
  dataRange : '1-30 September 2019',
  income: 100000,
  expense: 50000,
  balance: 50000,
  annualBalace: 100000,
  currentMonth: 9,
  currencyType: '$'
};



