import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from '../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods(){
    return sample_foods;
  }

  seaarchFood(searchFoodItem: any){
    return this.getAllFoods().filter(food => food.name.toLowerCase().includes(searchFoodItem.toLowerCase()))
  }

  getAllTags(){
    return sample_tags;
  }

  getAllFoodByTag(tag: any){
   return tag == 'All' ? this.getAllFoods() :  this.getAllFoods().filter(food => food.tags.includes(tag));

  }
}
