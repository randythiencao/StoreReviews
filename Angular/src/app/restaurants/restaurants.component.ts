import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../components/beans/Restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private restService: RestaurantService,
    private router: Router) { }

  allRestaurants: Array<Restaurant>;

  ngOnInit() {
    this.allRestaurants = JSON.parse(sessionStorage.getItem('allRestaurants'));
  }
  restChosen(id: number) {
    console.log('called choose ts for id' + id);
    this.router.navigate(['/add', id]);
  }




}
