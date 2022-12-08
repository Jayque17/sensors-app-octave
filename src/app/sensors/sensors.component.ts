import { Component, OnInit } from '@angular/core';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor-service.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit{

  // sensor1: Sensor = {
  //   id: 'id',
  //   path: 'path',
  //   lastEditDate: 15152022,
  //   measure: 40
  // }

  sensors: Sensor[] = [];

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.getSensors()
  }

  getSensors(): void {
    this.sensorService.getSensors().subscribe(sensors => this.sensors = sensors);
  }
}
