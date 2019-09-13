import { Component, OnInit } from '@angular/core';
import { Budget } from '../models/budget';
import { mockBudgetList } from 'src/mock';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  public budgetList: Array<Budget>;
  public showProgressBar = true;


  constructor() {
  }


  ngOnInit() {
    this.budgetList = mockBudgetList;
  }

  public addNewBudgetCategory() {
    this.showProgressBar = false;
  }

  public save() {
    this.showProgressBar = true;
  }

}
