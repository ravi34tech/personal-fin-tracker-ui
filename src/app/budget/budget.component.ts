import { Component, OnInit } from '@angular/core';
import { Budget } from '../models/budget';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  public values = [];
  public budgetList: Array<Budget>;


  constructor() {
    this.values = ['1', '2', '3', '4', '5'];
  }

  ngOnInit() {
    console.info("calling onInit...");
    this.budgetList = [
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
    console.info(this.budgetList);
  }

}
