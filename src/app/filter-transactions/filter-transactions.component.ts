import { Component, OnInit } from '@angular/core';
import { Category } from '../models/transaction';
import { mockCategoryList } from 'src/mock';

@Component({
  selector: 'app-filter-transactions',
  templateUrl: './filter-transactions.component.html',
  styleUrls: ['./filter-transactions.component.css']
})
export class FilterTransactionsComponent implements OnInit {

  public showFilterForm = true;
  public categories: Category[];
  constructor() { }

  ngOnInit() {
    this.categories = mockCategoryList;
  }

  public filterTransactions() {

    this.showFilterForm = false;
  }

}
