import { Injectable } from '@angular/core';
import { mockTransactionList, mockCategoryList, mockBudgetList, mockSummary } from 'src/mock';

@Injectable({
  providedIn: 'root'
})
export class FinancetrackerService {

  constructor() { }


  public getTransactionList() {
    return mockTransactionList;
  }

  public getCategoryList() {
    return mockCategoryList;
  }

  public getBudgetList() {
    return mockBudgetList;
  }

  public getSummaryList() {
    return mockSummary;
  }


}
