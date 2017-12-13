import { Component, OnInit } from '@angular/core';
import { User } from '../components/beans/User';
import { ControlPanelService } from '../service/control-panel.service';
import { Review } from '../components/beans/Review';

@Component({
  selector: 'app-ireviewed',
  templateUrl: './ireviewed.component.html',
  styleUrls: ['./ireviewed.component.css']
})
export class IreviewedComponent implements OnInit {

  user: User;
  reviews: Array<Review>;
  constructor(private cpService: ControlPanelService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    this.getReview();
  }

  getReview() {
    this.cpService.getReviewByUser().subscribe(data => {
      this.reviews = JSON.parse(sessionStorage.getItem('userReviews'));
    });
  }

}
