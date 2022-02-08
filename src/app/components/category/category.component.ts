import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[]
  currentCategory:Category={categoryId:-1,categoryName:""}

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategoris();
  }

  getCategoris(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data
    })
  }
  setCurrentCategory(category:Category){
      this.currentCategory=category
  }
  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllCategoryClass(){
    if(this.currentCategory.categoryId==-1){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  CurrentCategoryClassDefault(){
    this.currentCategory={categoryId:-1,categoryName:""}
  }
}
