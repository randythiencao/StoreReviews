import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {User} from '../beans/User';
import {Router} from '@angular/router';
@Component({
  selector: 'app--login',
  templateUrl: './-login.component.html',
  styleUrls: ['./-login.component.css']
})
export class LoginComponent implements OnInit {

  model: User;
  messages: any;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
      this.model = new User();
  }

  onSubmit(): void {
      this.authService
          .login(this.model)
          .subscribe(isLoggedIn => {
              if (isLoggedIn) {
                  this.router.navigate(['/register']);
              } else {
                  this.messages ='Email/password incorrect!';
              }
          });
  }
}
