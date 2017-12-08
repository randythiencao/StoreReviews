import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { User } from '../components/beans/User';
import { Cred } from '../components/beans/Cred';

import { environment } from '../../environments/environment';
// import {API_URL} from '../../app.component';

@Injectable()
export class AuthService {

    isLoggedIn = false;

    constructor(private http: Http) {
    }

    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    login(cred: Cred): Observable<boolean> {
        return this.http.post(environment.context + 'users/login', cred, { withCredentials: true })
            .map(response => response.json())
            .map((currentUser: User) => {
                if (!User.isNull(currentUser)) {
                    this.isLoggedIn = true;
                    return true;
                } else {
                    this.isLoggedIn = false;
                    return false;
                }
            })
            .catch(AuthService.handleError);
    }

    logOut(): Observable<boolean> {
        this.isLoggedIn = !this.isLoggedIn;
        return Observable.of(false);
    }

    register(user: User): Observable<User> {
        console.log('submitted ' + user.firstName);
        return this.http.post(environment.context + 'users/register', user, { withCredentials: true })
            .map(response => response.json()) //as User)
            // .map(currentUser => !User.isNull(currentUser))
            .catch(AuthService.handleError);
    }


}