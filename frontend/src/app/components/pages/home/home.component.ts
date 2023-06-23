import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food_model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.fetchAllFoods();
  }

  fetchAllFoods(){
    this.foods = this.foodService.getAllFoods();
  }

}
