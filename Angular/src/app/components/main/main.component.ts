import { Component, OnInit, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { User } from '../beans/User';
import { GeocodingApiService } from '../../service/geoapi.service';
import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AgmCoreModule
} from '@agm/core';
import { Restaurant } from '../beans/Restaurant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // google maps zoom level
  zoom: number = 8;

  restaurants: Array<Restaurant>;
  // initial center position for the map
  lat: number = 28.0720588;
  lng: number = -82.4284711;


  markers: marker[] = [
    {
      lat: 28.0720588,
      lng: -82.4284711,
      label: 'B',
      draggable: false
    },
    {
      lat: 28.0622991,
      lng: -82.4090294,
      label: 'C',
      draggable: true
    }
  ]

  constructor(private http: Http) { }

  ngOnInit() {
    this.restaurants = JSON.parse(sessionStorage.getItem('allRestaurants'));
    this.populateMap();
  }

 
  populateMap() {
    for (let rest of this.restaurants)
    {
      console.log(rest)
      this.markers.push({
        lat: 28.0807637,
        lng: -82.4305818,
        label: 't',
        draggable: false
      });
    }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
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