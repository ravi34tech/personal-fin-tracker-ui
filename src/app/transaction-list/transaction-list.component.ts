import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { mockTransactionList } from 'src/mock';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  public transactionList: Array<Transaction>;

  constructor() { }

  ngOnInit() {
    this.transactionList = mockTransactionList;
  }

}
