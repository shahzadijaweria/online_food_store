import { Injectable } from '@angular/core';
import { sample_foods } from '../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods(){
    return sample_foods;
  }
}
