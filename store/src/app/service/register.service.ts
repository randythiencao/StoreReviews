import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

  private dataSubject = new BehaviorSubject([]);
  data$: Observable<any> = this.dataSubject.asObservable();

  constructor(public http: Http) {
    this.fetch;
  }

  fetch(user) {
    let url: string = 'http://localhost:8080/Reimbursement/register';
    return this.http.post(url, user)
    .map(res=>res.json());
    // this.http.post(url, user).map(res=>res.json()).subscribe( (resp) => {
    //   this.dataSubject.next(resp);
  }

}
