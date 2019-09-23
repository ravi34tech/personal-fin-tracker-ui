import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../models/transaction';
import { FinancetrackerService } from '../services/financetracker.service';
import { Summary } from '../models/summary';
import { mockSummary } from 'src/mock';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public showAddForm = false;
  public trxnList: Transaction[];
  public trxnSummary: Summary;

  constructor(private financetrackService: FinancetrackerService) { }

  ngOnInit() {
    this.trxnList = this.financetrackService.getTransactionList();
    this.trxnSummary = mockSummary;
  }

  showNewTrxn() {
    this.showAddForm = true;
    this.trxnList = [];
  }

}
