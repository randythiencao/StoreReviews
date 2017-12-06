import {Component, OnInit} from "@angular/core";
import {ApiService} from  '../../service/api.service';
import {IPosts} from "../beans/IPosts";

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  _postsArray: IPosts[];
  _postcred: IPosts;
  
      constructor(private apiSerivce: ApiService) {
      }
  
      getPosts(): void {
          this.apiSerivce.getPosts()
              .subscribe(
                  resultArray => this._postsArray = resultArray,
                  error => console.log("Error :: " + error)
              )
      }

      postPosts(): void {
        this.apiSerivce.postPosts()
            .subscribe(
                resultArray => this._postcred = resultArray,
                error => console.log("Error :: " + error)
            )
    }
  
      ngOnInit(): void {
          this.postPosts();
      }
  }