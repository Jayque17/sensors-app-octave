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
  public doTheThing() {
    this.sensorsService.get() .subscribe(
      (response) => {                           //next() callback
        console.log('response received')
      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
      },
      () => {                                   //complete() callback
        console.error('Request completed')      //This is actually not needed 
      })
  }
}
