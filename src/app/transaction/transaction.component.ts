import { Component, OnInit, Input } from '@angular/core';
import { Transaction, Category } from '../models/transaction';
import { FinancetrackerService } from '../services/financetracker.service';
import { Summary } from '../models/summary';
import { mockSummary } from 'src/mock';
import { FinResponse } from '../models/finResponse';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public showAddForm = false;
  public trxnList: Transaction[];
  public trxnSummary: Summary;
  public categoryList: Category[];
  public response: FinResponse;

  constructor(private financetrackService: FinancetrackerService) {

  }

  ngOnInit() {
    this.trxnList = this.financetrackService.getTransactionList();
    this.trxnSummary = mockSummary;
  }

  showNewTrxn() {
    this.showAddForm = true;
    this.trxnList = [];
    this.financetrackService.getCategoryList()
    .subscribe(
      response => {
        this.categoryList = response.categoryList;
        console.info(this.categoryList);
      }
    );
  }

}
