import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './types';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'b13dca06fad2516ab926e2946e70545e';
  url;
  country;
  city;
  source;


  constructor(private _httpClient: HttpClient) { }

  getWeather(city: string, country: string): Observable<Activity>{
    return this._httpClient.get<Activity>(API +city+','+country+'&appid='+this.apiKey);
    
  }

  getAllWeather(): Observable<Activity[]>{
    return this._httpClient.get<Activity[]>(API);

  }

}
const API = "https://api.openweathermap.org/data/2.5/forecast?q=";
const url = "https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=b13dca06fad2516ab926e2946e70545e";
