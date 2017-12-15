import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRevRest } from '../components/beans/UserRevRest';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-some-profile',
  templateUrl: './some-profile.component.html',
  styleUrls: ['./some-profile.component.css']
})
export class SomeProfileComponent implements OnInit {

  reviews: Array<UserRevRest>;
  sub: any;
  id: number

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.id = +params['id'];
    });

    console.log('link sent '+ this.id)
  }


  // goToRest(id: number) {
  //   this.router.navigate(['/add', id]);
  // }

}
