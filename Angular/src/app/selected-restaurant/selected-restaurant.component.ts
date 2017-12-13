import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest-service.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../components/beans/Restaurant';
import { Review } from '../components/beans/Review';
import { Response } from '@angular/http';

@Component({
  selector: 'app-selected-restaurant',
  templateUrl: './selected-restaurant.component.html',
  styleUrls: ['./selected-restaurant.component.css']
})
export class SelectedRestaurantComponent implements OnInit {

  sub: any;
  id: number;
  restaurant= new Restaurant();
  model= new Review();
  reviews: Array<Review>;
  constructor(private route: ActivatedRoute, private restService: RestService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.restService.getRestaurantById(this.id).subscribe( data => {
      console.log(data)});
    this.restaurant = JSON.parse(sessionStorage.getItem('currentRestaurant'));

 

    this.restService.getRestReview(this.id).subscribe( data => {
      console.log(data)});
    this.reviews = JSON.parse(sessionStorage.getItem('restReviews'));

    // this.restService.getRestaurantReviews(this.id);
    // this.reviews = JSON.parse(sessionStorage.getItem('restReviews'));
    // console.log('reviews length '+ this.reviews.length);
  }


//   onSubmit(): void {
//     console.log('called the submit form with json obj');
//     this.restaurantService.addReview(this.model)
//     .subscribe(added => {
//         if (added) {
//             // this.router.navigate(['']);
//         } else {
//             this.messages = 'unable to add Review';
//         }
//     });
// }

// ngOnDestroy() {
//     this.restaurantsObserver.unsubscribe();
// }
  
}
