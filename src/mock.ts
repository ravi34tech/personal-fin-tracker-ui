import { Budget } from './app/models/budget';
import { Category } from './app/models/transaction';

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
      id: 1,
      name: 'Shopping',
      colorCode: '#fd7e14'
    },
    {
      id: 1,
      name: 'Entertainment',
      colorCode: '#343a40'
    }
];


