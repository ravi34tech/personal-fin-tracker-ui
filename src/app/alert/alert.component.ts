import { Component, OnInit, Input } from '@angular/core';
import { FinanceTrackBean } from '../models/financeTrackBean';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input()
  public response: FinanceTrackBean;

  constructor() {

  }

  ngOnInit() {
  }

}
