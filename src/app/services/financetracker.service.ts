import { Injectable } from '@angular/core';
import { mockTransactionList, mockBudgetList, mockSummary } from 'src/mock';
import { FinanceTrackBean } from '../models/financeTrackBean';
import { Observable, of } from 'rxjs';
import { catchError, map as __map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FinResponse } from '../models/finResponse';

@Injectable({
  providedIn: 'root'
})
export class FinancetrackerService {

  private rootUrl = 'http://localhost:2222/pfintrack';
  private saveCategoryPath = `${this.rootUrl}/saveCategory`;
  private getAllCategoryPath = `${this.rootUrl}/getAllCategory`;
  private deleteCategoryPath = `${this.rootUrl}/deleteCategory`;

  constructor(private http: HttpClient) {
  }


  public saveCategory(bean: FinanceTrackBean): Observable<FinResponse> {
    return this.http.post<Response>(this.saveCategoryPath, bean)
      .pipe(
        __map(response => response),
        catchError(this.erroHandler));
  }

  public getCategoryList(): Observable<FinResponse> {
    return this.http.get<Response>(this.getAllCategoryPath)
      .pipe(
        __map(response => response),
        catchError(this.erroHandler));
  }

  public deleteCategory(id: number): Observable<FinResponse> {
    return this.http.get<Response>(`${this.deleteCategoryPath}/${id}`)
      .pipe(
        __map(response => response),
        catchError(this.erroHandler));
  }



  public getTransactionList() {
    return mockTransactionList;
  }

  public getBudgetList() {
    return mockBudgetList;
  }

  public getSummaryList() {
    return mockSummary;
  }

  private erroHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error && error.error.status) {
      errorMessage = error.error.message;
      errorMessage = `Error Code: ${error.error.status} - error : ${error.error.error}
			- Message: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status} \nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    const response = null;
    return of(response);
  }

}
