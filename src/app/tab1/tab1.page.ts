import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../types';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  activityList: Observable<Activity[]>;

  constructor(weatherService: WeatherService) {
    this.activityList = weatherService.getAllWeather();
    // console.log(WeatherService)
  }

}
