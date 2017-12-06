import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {IPosts} from "../components/beans/IPosts";

@Injectable()
export class ApiService {

    // private _postsURL = "https://jsonplaceholder.typicode.com/posts";
    private _postsURL = "http://localhost:8080/SprApp/users/login"

    public userpass = {
      username: 'user',
      password: 'password'
    }
    constructor(private http: Http) {
    }
    getPosts(): Observable<IPosts[]> {
        return this.http
            .get(this._postsURL)
            .map((response: Response) => {
                return <IPosts[]>response.json();
            })
            .catch(this.handleError);
    }

    postPosts(): Observable<IPosts> {
      return this.http
          .post(this._postsURL, this.userpass)
          .map((response: Response) => {
              return <IPosts>response.json();
          })
          .catch(this.handleError);
  }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}