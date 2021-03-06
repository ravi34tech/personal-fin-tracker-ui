import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BudgetComponent } from './budget/budget.component';
import { GraphsComponent } from './graphs/graphs.component';
import { CategoriesComponent } from './categories/categories.component';
import { ReportsComponent } from './reports/reports.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { LoginComponent } from './login/login.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { FilterTransactionsComponent } from './filter-transactions/filter-transactions.component';
import { BillsComponent } from './bills/bills.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    BudgetComponent,
    GraphsComponent,
    CategoriesComponent,
    ReportsComponent,
    TransactionListComponent,
    LoginComponent,
    TransactionSummaryComponent,
    FilterTransactionsComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
