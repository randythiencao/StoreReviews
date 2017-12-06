import { Component, Input , OnInit } from '@angular/core';
import { RegisterService } from '../../service/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regInfo :RegInfo = {
  username: '',
  password: '',
  fName: '',
  lName: '',
  email: '',
  roleId: 0,
  };

  constructor(private registerService: RegisterService) { }
  
  ngOnInit() {
  }
  
  register(e) {
    // e.preventDefault();
    // this.cred = JSON.parse(e.value);
    // this.cred = JSON.stringify(e.value);
    // console.log(this.cred);
    console.log(this.regInfo);
    this.regInfo.roleId = 2;
    this.registerService.fetch(this.regInfo).subscribe(res => this.regInfo = res);
  }

  // register(e)
  // {
  //   e.preventDefault();
  //   console.log(e.target[0].value);
  //   this.regInfo = JSON.stringify(e.value);  
  // }
}

export class RegInfo {
  username:string;
  password:string;
  fName:string;
  lName:string;
  email:string;
  roleId:number;
}