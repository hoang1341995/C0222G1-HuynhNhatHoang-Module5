import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  idToDelete: number;
  nameToDelete: string;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(categories => {
      this.categories = categories;
    });
  }

  showMess(id: any, name: any) {
    this.idToDelete = id;
    this.nameToDelete = name;
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.idToDelete).subscribe((data) => {
      this.getCategory();
    });
  }
}
