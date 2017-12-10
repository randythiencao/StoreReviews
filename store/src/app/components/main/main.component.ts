import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { User } from '../beans/User';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  myUsers: Array<User>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers() {
    this.http.get(environment.context + 'main').subscribe(successResp => {
      this.myUsers = successResp.json();
    },
      failRes => {

      });
  }

}
