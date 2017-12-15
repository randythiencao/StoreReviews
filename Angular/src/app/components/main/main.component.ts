import { Component, OnInit, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { User } from '../beans/User';

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AgmCoreModule
} from '@agm/core';
import { Restaurant } from '../beans/Restaurant';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MapService } from '../../service/map.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // google maps zoom level
  zoom: number = 12;

  restaurants: Array<Restaurant>;
  // initial center position for the map
  lat: number = 28.0720588;
  lng: number = -82.4284711;


  markers: Array<marker>;

  constructor(private http: Http,
    private router: Router,
    private mapService: MapService) { }

  ngOnInit() {
    this.restaurants = JSON.parse(sessionStorage.getItem('allRestaurants'));
    this.getMarkers();

  }


  getMarkers() {
    // this.mapService.getRestMarkers().subscribe(resp => {console.log(resp)});

  }
  clickedMarker(label: string, index: number) {
    console.log(label);
    this.router.navigate(['/add', +label]);
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }



}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: String;
  draggable: boolean;
}