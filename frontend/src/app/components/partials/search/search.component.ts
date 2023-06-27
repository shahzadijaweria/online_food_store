import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFood = '';
  constructor(activatedRouter: ActivatedRoute, private _router: Router) {
    activatedRouter.params.subscribe(params => {                    // for seraching
      if (params.searchItem)
        this.searchFood = params.searchItem;
    });
  }

  ngOnInit(): void {
    
  }

  searchFoodItem(foodItem: any){
    if (foodItem)
      return this._router.navigateByUrl(`/search/${foodItem}`)       // if food is searched, show result
    return this._router.navigateByUrl(`/`)                                  // in else, show all food items
    
  }

}
