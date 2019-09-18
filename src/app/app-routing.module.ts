import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { BudgetComponent } from './budget/budget.component';
import { GraphsComponent } from './graphs/graphs.component';
import { CategoriesComponent } from './categories/categories.component';
import { ReportsComponent } from './reports/reports.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { LoginComponent } from './login/login.component';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { BillsComponent } from './bills/bills.component';
import { FilterTransactionsComponent } from './filter-transactions/filter-transactions.component';


const routes: Routes = [

  { path: '',  redirectTo: 'transactionList', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'transaction',  component: TransactionComponent },
  { path: 'transactionList',  component: TransactionListComponent },
  { path: 'budget',  component: BudgetComponent },
  { path: 'graph',  component: GraphsComponent },
  { path: 'categories',  component: CategoriesComponent },
  { path: 'report',  component: ReportsComponent },
  { path: 'summary', component: TransactionSummaryComponent},
  { path: 'bills', component: BillsComponent},
  { path: 'filterTrxn', component: FilterTransactionsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
