import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFood = '';
  timeOut : any;

  constructor(private activatedRouter: ActivatedRoute, private _router: Router) {
    activatedRouter.params.subscribe(params => {                    // for seraching
      if (params.searchItem)
        this.searchFood = params.searchItem;
    });
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {  
      if (params.searchItem)
        this.searchFood = params.searchItem;
    });
  }

  searchFoodItem(foodItem: any){  
    this.timeOut = setTimeout(() => {                  // search when release keystroke with 1 sec delay
      if (foodItem)
        return this._router.navigateByUrl(`/search/${foodItem}`)       // if food is searched, show result
      return this._router.navigateByUrl(`/`)                         // in else, show all food items
    }, 1000);

  }

  clearTimeOut(){
    clearTimeout(this.timeOut);                  // clear time out i.e. again start time when key stroke is hit again
  }

}
