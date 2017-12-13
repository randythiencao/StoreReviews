import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { User } from '../components/beans/User';


@Injectable()
export class ControlPanelService {

    constructor(private http: Http) { }

    updateInfo(user: User) {
        console.log(user);
        return this.http.post(environment.context + 'cpanel/update', user)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let retUser = response.json();
                // if (user && user.token) 
                if (retUser) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(retUser));
                }
            });
    }

    getReviewByUser() {
        let user: User = JSON.parse(sessionStorage.getItem('currentUser'));
        let id = user.userId;
        console.log(environment.context + 'users/getReviews/' + id);
        return this.http.get(environment.context + 'users/getReviews/'+ id)
          .map(
            (response: Response) => {
    
              let retUser = response.json();
              console.log('review is ' + JSON.stringify(retUser));
              if (retUser) {
                sessionStorage.setItem('userReviews', JSON.stringify(retUser));
              }
            },
            (err) => {
              console.log(err);
            });
      }
}
