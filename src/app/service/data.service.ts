import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weatherResponse.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWeatherData(lat, lng): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>('https://api.openweathermap.org/data/2.5/weather?appid=53f9d8e4213222cf517d86dc406d67fc&lat='+lat+'&lon='+lng);
  }
}
