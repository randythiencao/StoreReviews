import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRevRest } from '../components/beans/UserRevRest';

@Component({
  selector: 'app-some-profile',
  templateUrl: './some-profile.component.html',
  styleUrls: ['./some-profile.component.css']
})
export class SomeProfileComponent implements OnInit {

  reviews: Array<UserRevRest>;

  constructor(private router: Router) { }

  ngOnInit() {

  }


  goToRest(id: number) {
    this.router.navigate(['/add', id]);
  }

}
