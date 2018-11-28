import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';
import { WeatherResponse } from '../models/weatherResponse.model';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public weatherResponse: WeatherResponse;

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => { 

          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;

          this.DataService.getWeatherData(latitude, longitude).subscribe(data => {
            this.weatherResponse = data;
          });

      },
      error => {
        alert('location blocked!');
      }
    );
    } 
  }

  refresh() {
    location.reload();
  }
}
