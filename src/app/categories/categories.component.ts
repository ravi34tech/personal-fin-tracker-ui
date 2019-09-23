import { Component, OnInit } from '@angular/core';
import { Category } from '../models/transaction';
import { mockCategoryList } from 'src/mock';
import { FinanceTrackBean } from '../models/financeTrackBean';
import { FinancetrackerService } from '../services/financetracker.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public showCategoryForm = false;
  public categoryList: Array<Category>;
  public category: Category;
  public colorCode: string;
  public bean: FinanceTrackBean;

  constructor(private financeTrackService: FinancetrackerService) {
    this.category = new Category();
    this.colorCode = '';
    this.categoryList = [];
    this.bean = new FinanceTrackBean();
  }

  ngOnInit() {
    this.getAllCategories();
  }

  public addNewCategory() {
    this.showCategoryForm = true;
    this.category = {name: '', colorCode: '', id: 0 };
  }

  public getAllCategories() {
    this.financeTrackService.getCategoryList().subscribe(
      response => {
        if (response.status.toUpperCase() === 'SUCCESS') {
          this.categoryList = response.categoryList;
        }}
    );
  }

  public save() {
    this.financeTrackService.saveCategory(this.bean).subscribe(
      response => {
        if (response.status.toUpperCase() === 'SUCCESS') {
          this.categoryList.push(response.category);
        }
      }
    );
    this.showCategoryForm = false;
  }

  public editCategory(category: Category) {
    this.showCategoryForm = true;
    this.category = category;
  }

}
