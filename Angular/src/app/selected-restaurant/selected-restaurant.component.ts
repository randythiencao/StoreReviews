import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest-service.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../components/beans/Restaurant';
import { Review } from '../components/beans/Review';
import { Response } from '@angular/http';
import { User } from '../components/beans/User';

@Component({
  selector: 'app-selected-restaurant',
  templateUrl: './selected-restaurant.component.html',
  styleUrls: ['./selected-restaurant.component.css']
})
export class SelectedRestaurantComponent implements OnInit {

  sub: any;
  id: number;

  userId: number;
  restaurant = new Restaurant();
  model = new Review();
  reviews: Array<Review>;
  constructor(private route: ActivatedRoute, private restService: RestService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getRest();
    this.getReview();



    // this.restService.getRestaurantReviews(this.id);
    // this.reviews = JSON.parse(sessionStorage.getItem('restReviews'));
    // console.log('reviews length '+ this.reviews.length);
  }

  getRest() {
    this.restService.getRestaurantById(this.id).subscribe(data => {
      this.restaurant = JSON.parse(sessionStorage.getItem('currentRestaurant'));
    });


  }

  getReview() {
    this.restService.getRestReview(this.id).subscribe(data => {
      this.reviews = JSON.parse(sessionStorage.getItem('restReviews'));
    });

  }


  addReview() {

    let user: User = JSON.parse(sessionStorage.getItem('currentUser'));
    this.restService.addReview(this.model, user.userId, this.restaurant.restaruantId)
      .subscribe((resp) => {
        console.log('added review successfully');
        this.getReview();
      },
      (err) => {
        console.log(err);
      })
  }

  //   onSubmit(): void {
  //     console.log('called the submit form with json obj');
  //     this.restaurantService.addReview(this.model)
  //     .subscribe(added => {
  //         if (added) {
  //             // this.router.navigate(['/main']);
  //         } else {
  //             this.messages = 'unable to add Review';
  //         }
  //     });
  // }

  // ngOnDestroy() {
  //     this.restaurantsObserver.unsubscribe();
  // }

}
