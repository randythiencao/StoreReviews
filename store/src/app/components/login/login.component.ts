import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileObj = {
    username: '',
    password: ''
  }
  cred: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(e) {
    // e.preventDefault();
    // this.cred = JSON.parse(e.value);
    // this.cred = JSON.stringify(e.value);
    // console.log(this.cred);
    console.log(this.profileObj);
    this.loginService.fetch(this.profileObj).subscribe(res => this.profileObj = res);
  }

}
