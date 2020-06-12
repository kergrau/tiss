import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import list from '../list.json';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = [];
  sections = [];
  constructor(private http: DataService) { }

  getCategories() {
    this.http.getCategories().subscribe(data => {
      this.categories.push(data);
    });
  }

  getSections() {
    this.http.getSections().subscribe(data => {
      this.sections.push(data);
    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.getSections();
  }

}


