import { Component, OnInit } from '@angular/core';
import { Category } from '../models/transaction';
import { mockCategoryList } from 'src/mock';

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

  constructor() {
    this.category = new Category();
    this.colorCode = '';
  }

  ngOnInit() {
    this.categoryList = mockCategoryList;
  }

  public addNewCategory() {
    this.showCategoryForm = true;
    this.category = {name: '', colorCode: '', id: 0 };
  }

  public save() {
    this.showCategoryForm = false;
  }

  public editCategory(category: Category) {
    this.showCategoryForm = true;
    this.category = category;
  }

}
