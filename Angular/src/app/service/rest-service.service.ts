import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Restaurant } from '../components/beans/Restaurant';
import { environment } from '../../environments/environment';

@Injectable()
export class RestService {

  constructor(private http: Http) { }

  restaurants: Array<Restaurant>;

  getAllRestaurant() {
    return this.http.get(environment.context +'restaurants/all')
    .map(response => {
      this.restaurants = response.json(),
      sessionStorage.setItem('allRestaurants', JSON.stringify(this.restaurants));
    },
  err => console.log(err))
  }

//   getRestaurantById(id: number): void {
//     console.log(id);
//     this.restaurants = this.http.get(environment.context + 'restaurants/get/' + id).map(
//         response => response.json(),
//         err => console.log(err)
//     )
//     .subscribe( resp => {
//         this.dataSubject.next(resp);
//     },
//     err => {
//         console.log('error occured while loading restaurants' + err);
//     }
// );
}
