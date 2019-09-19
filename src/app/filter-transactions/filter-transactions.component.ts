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

  constructor(private financetrackerService: FinancetrackerService) { }

  ngOnInit() {
    this.categories = this.financetrackerService.getCategoryList();
    this.trxnList = [];
  }

  public filterTransactions() {
    console.info("Searching...");
    this.showFilterForm = false;
    this.trxnList = this.financetrackerService.getTransactionList();
  }

}
