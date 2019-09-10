import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public showForm = true;
  public color: string;

  constructor() {
    this.color = '';

  }

  ngOnInit() {
  }

  public save() {
    console.info("Color : "+this.color);
  }

}
