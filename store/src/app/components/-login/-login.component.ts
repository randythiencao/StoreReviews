import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Cred } from '../beans/Cred';
import { Router } from '@angular/router';
@Component({
    selector: 'app--login',
    templateUrl: './-login.component.html',
    styleUrls: ['./-login.component.css']
})
export class LoginComponent implements OnInit {

    model: Cred;
    messages: any;

    constructor(private authService: AuthService,
        private router: Router) {
    }
    
    ngOnInit(): void {
        this.model = new Cred();
    }

    onSubmit(): void {
        this.authService
            .login(this.model)
            .subscribe(isLoggedIn => {
                if (isLoggedIn) {
                    this.router.navigate(['/main']);
                } else {
                    this.messages = 'Email/password incorrect!';
                }
            });
    }
}
