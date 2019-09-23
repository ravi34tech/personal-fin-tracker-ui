import { Component, OnInit } from '@angular/core';
import { Category, Transaction } from '../models/transaction';
import { mockCategoryList } from 'src/mock';
import { FinancetrackerService } from '../services/financetracker.service';

@Component({
  selector: 'app-filter-transactions',
  templateUrl: './filter-transactions.component.html',
  styleUrls: ['./filter-transactions.component.css']
})
export class FilterTransactionsComponent implements OnInit {

  public showFilterForm = true;
  public categories: Category[];
  public trxnList: Transaction[];

  constructor(private financeTrackService: FinancetrackerService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  public getAllCategories() {
    this.financeTrackService.getCategoryList()
    .subscribe(
      response => {
        if (response.status.toUpperCase() === 'SUCCESS') {
          this.categories = response.categoryList;
        }
      });
  }

  public filterTransactions() {
    console.info("Searching...");
    this.showFilterForm = false;
    this.trxnList = this.financeTrackService.getTransactionList();
  }

}
