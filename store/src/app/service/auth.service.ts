import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { User } from '../components/beans/User';
import { Cred } from '../components/beans/Cred';

import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
// import {API_URL} from '../../app.component';

@Injectable()
export class AuthService {

    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private http: Http,
                private router: Router) {}

    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    get isLoggedIn() {
        return this.loggedIn.asObservable();
      }

    login(cred: Cred) {
        this.http.post(environment.context + 'users/login', cred, { withCredentials: true })
            .map(response => response.json())
            .subscribe(
                resp => {
                  this.loggedIn.next(resp);
                  this.router.navigate(['/main']);
                },
                err => {
                  console.log('error occurred loading flashcards' + err);
                }
              );
            }

    logOut() {
        this.loggedIn.next(false);
        this.router.navigate(['']);
    }

    register(user: User): Observable<User> {
        console.log('submitted ' + user.firstName);
        return this.http.post(environment.context + 'users/register', user, { withCredentials: true })
            .map(response => response.json()) //as User)
            // .map(currentUser => !User.isNull(currentUser))
            .catch(AuthService.handleError);
    }


}