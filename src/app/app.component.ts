import { Component } from '@angular/core';
import { FinanceTrackBean } from './models/financeTrackBean';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-fin-tracker-ui';
  response: FinanceTrackBean;
  constructor() {
    this.response = new FinanceTrackBean();
  }
}
