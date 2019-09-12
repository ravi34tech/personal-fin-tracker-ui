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

  constructor() {
    this.category = new Category();
  }

  ngOnInit() {
    this.categoryList = mockCategoryList;
  }

  public save() {
    console.info("Color : "+this.category);
    this.showCategoryForm = false;
  }

  public editCategory(category: Category) {
    this.category = category;
    this.showCategoryForm = true;
    console.info("category Editing");
    console.info(this.category);
  }

}
