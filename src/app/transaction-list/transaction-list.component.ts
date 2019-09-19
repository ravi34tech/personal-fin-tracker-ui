import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../models/transaction';
import { mockTransactionList } from 'src/mock';
import { FinancetrackerService } from '../services/financetracker.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  @Input() public transactionList: Array<Transaction>;

  constructor(private financetrackerService: FinancetrackerService) { }

  ngOnInit() {
   // this.transactionList = this.financetrackerService.getTransactionList();
  }

}
