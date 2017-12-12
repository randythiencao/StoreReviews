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

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 28.0720588;
  lng: number = -82.4284711;

  constructor(private http: Http,
    private geocodingAPIService: GeocodingApiService) { }

  ngOnInit() {
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

  markers: marker[] = [
    {
      lat: 28.0807637,
      lng: -82.4305816,
      label: 'A',
      draggable: true
    },
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
}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}