import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {

  id: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit(): void {
    console.log('called choose ts for id' + this.id);
    this.router.navigate(['/add', this.id]);
  }

}
