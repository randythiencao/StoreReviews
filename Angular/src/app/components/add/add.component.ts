import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../service/restaurant.service';
import { Restaurant } from '../beans/Restaurant';
import { Subscription } from 'rxjs/Rx';
import { Review } from '../beans/Review';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html'
})
export class AddComponent implements OnInit, OnDestroy {

    public restaurants : Restaurant;
    public restaurantsObserver: Subscription;
    public filterCompleted = false;

    model: Review;
    messages: any;
    id: number;
    private sub: any;

    constructor(private restaurantService: RestaurantService,
        private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.getData();
        // console.log(this.restaurants.reviews);
        this.model = new Review();
    }

    getData() {
        console.log('this id is ' +this.id);
        this.restaurantService.setId(this.id);
        // this.restaurantsObserver = this.restaurantService.data$.subscribe(
        //     requestData => {
        //         console.log(requestData);
        //         this.restaurants = requestData;
        //     },
        //     err => console.log(err)
        // );
        this.restaurantService.testGet(this.id).subscribe(
            requestData => {
                    this.restaurants = JSON.parse(sessionStorage.getItem('currentRest'));
                    
                    // this.restaurants = requestData;
                },
                err => console.log(err)
            );
    }

    // add reviews
    onSubmit(): void {
        console.log('called the submit form with json obj');
        this.restaurantService.addReview(this.model)
        .subscribe(added => {
            if (added) {
                // this.router.navigate(['']);
            } else {
                this.messages = 'unable to add Review';
            }
        });
    }

    ngOnDestroy() {
        this.restaurantsObserver.unsubscribe();
    }

    // onSubmit(): void {
    //     console.log(this.model);
    //     this.restaurantService.getRestaurantById(1);

    // }

    // onSubmit(): void {
    //     console.log(this.model);
    //     this.restaurantService
    //         .getRestaurantById(1)
    //         .subscribe(restExists => {
    //             if (restExists) {
    //                 this.router.navigate(['/main']);
    //             } else {
    //                 this.messages = 'Restaurant doesnt exist!';
    //             }
    //         });
    // }
}
