import { Component, OnInit } from '@angular/core';
import { Category } from '../models/transaction';
import { mockCategoryList } from 'src/mock';
import { FinanceTrackBean } from '../models/financeTrackBean';
import { FinancetrackerService } from '../services/financetracker.service';
import { FinResponse } from '../models/finResponse';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public showCategoryForm = false;
  public categoryList: Array<Category>;
  public category: Category;
  public bean: FinanceTrackBean;
  public response: FinResponse;


  constructor(private financeTrackService: FinancetrackerService) {
    this.categoryList = [];
    this.initilizeBean();
  }

  ngOnInit() {
    this.getAllCategories();
    this.hideForm();
  }

  private initilizeBean() {
    this.bean = new FinanceTrackBean();
    this.category = new Category();
  }

  private convertCategoryToFinTrackBean(category: Category) {
    this.bean.categoryId = category.id;
    this.bean.categoryName = category.name;
    this.bean.categoryColor = category.colorCode;
  }

  private buildCategoryErrorResponse(error: any) {
    this.response.status = 'Fail';
    this.response.statusMessage = error;
  }

  public showForm() {
    this.showCategoryForm = true;
  }

  public hideForm() {
    this.showCategoryForm = false;
  }

  public addNewCategory() {
    this.showForm();
    this.initilizeBean();
  }

  public getAllCategories() {
    this.financeTrackService.getCategoryList().subscribe(
      response => {
        if (response != null && response.status.toUpperCase() === 'SUCCESS') {
          this.categoryList = response.categoryList;
        }
      },
      error => {
          this.buildCategoryErrorResponse(error);
        }
    );
  }

  public save() {
    this.response = null;
    this.financeTrackService.saveCategory(this.bean).subscribe(
      response => {
        this.response = response;
        if (response.status.toUpperCase() === 'SUCCESS') {
          this.getAllCategories();
        }
      },
      error  => {
        this.buildCategoryErrorResponse(error);
      }
    );
    this.hideForm();
  }

  public editCategory(category: Category) {
    this.showForm();
    this.convertCategoryToFinTrackBean(category);
  }

  public deleteCategory(category: Category) {
    this.response = null;
    this.financeTrackService.deleteCategory(category.id)
    .subscribe(
      response => {
        this.response = response;
        this.getAllCategories();
      },
      error  => {
        this.buildCategoryErrorResponse(error);
      }
    );
  }

}
