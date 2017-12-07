import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {User} from '../beans/User';
@Component({
  selector: 'app--reg',
  templateUrl: './-reg.component.html',
  styleUrls: ['./-reg.component.css']
})
export class RegComponent implements OnInit {

  model: User;
  // messages: Message[] = [];
  messages:User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
      this.model = new User();
  }

  onSubmit(): void {
      this.authService
          .register(this.model)
          .subscribe(isRegistered => {
              this.messages = isRegistered
            // if (isRegistered) {
              //     this.messages = 'Registered successfully!';
              // } else {
              //     this.messages = 'Email already in use';
              // }
          });
  }
}