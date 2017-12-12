import { Component, OnInit } from '@angular/core';
import { User } from '../components/beans/User';

@Component({
  selector: 'app-ireviewed',
  templateUrl: './ireviewed.component.html',
  styleUrls: ['./ireviewed.component.css']
})
export class IreviewedComponent implements OnInit {

  user:User;

  constructor() { }

  ngOnInit() {
  this.user = JSON.parse(sessionStorage.getItem('currentUser'));
}

}
