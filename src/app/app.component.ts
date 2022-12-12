import { Component } from '@angular/core';
import { SensorsService } from './sensors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sensorsService: SensorsService) {

  }
  title = 'sensors-app-octave';
  sorted_response:any;
  public doTheThing() {
    this.sensorsService.get().subscribe(
      (response: any) => {                           //next() callback
        console.log('response received')
        console.log(response);
        this.sorted_response = response.body.filter((item: any) => 
          item.elems.environment !== undefined).map((item: any) => 
          ({deviceId : item.id, timestamp : item.creationDate, temperature : item.elems.environment.temperature, key: item.id}));
          console.log(this.sorted_response);
      })
  }
}
