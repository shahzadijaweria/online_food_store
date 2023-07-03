import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food_model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];
  constructor(private foodService: FoodService, private _router: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchAllFoods();

    this._router.params.subscribe(params => {                    // for seraching
      if (params.searchItem)
        this.searchFood(params.searchItem);
      else if (params.tag)
        this.searchTag(params.tag)
      else
        this.fetchAllFoods();
    })
  }

  fetchAllFoods(){
    this.foods = this.foodService.getAllFoods();
  }

  searchFood(item: any){
    this.foods = this.foodService.seaarchFood(item);
  }

  searchTag(tag: any){
    this.foods = this.foodService.getAllFoodByTag(tag);
  }

}
