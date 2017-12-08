import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from '../beans/User';
import { Roles } from '../beans/Roles';
import { Router } from '@angular/router';

@Component({
    selector: 'app--reg',
    templateUrl: './-reg.component.html',
    styleUrls: ['./-reg.component.css']
})
export class RegComponent implements OnInit {

    model: User;
    // messages: Message[] = [];
    messages: User;

    // roleNum: number;
    roles: Array<Object> = [
        { num: 1, name: 'DINER' },
        { num: 2, name: 'OWNER' }
    ];


    constructor(private authService: AuthService,
        private router: Router) {

    }

    ngOnInit(): void {
        this.model = new User();
        this.model.roleId = 1;
    }

    onSubmit(): void {
        this.authService
            .register(this.model)
            .subscribe(isRegistered => {
                this.router.navigate(['/login']);
                // if (isRegistered) {
                //     this.messages = 'Registered successfully!';
                // } else {
                //     this.messages = 'Email already in use';
                // }
            });
    }
    // toNumber() {
    //     this.roleNum = +this.roleNum;
    //     console.log(this.roleNum);
    // }
}
