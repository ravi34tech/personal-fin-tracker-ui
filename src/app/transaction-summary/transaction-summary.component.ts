import { Component, OnInit, Input } from '@angular/core';
import { Summary } from '../models/summary';
import { mockSummary } from 'src/mock';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {

  @Input()
  public summary: Summary;
  constructor() {

  }

  ngOnInit() {
  //  this.summary = mockSummary;
  }

}
