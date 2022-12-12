import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface Sensor {
  id: string;
  temperature: number;
}

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(private readonly httpClient : HttpClient) { }

  get() {
    var tmp = this.httpClient.get('https://octave-api.sierrawireless.io/v5.0/orangesb/event/s636d2846c1fe893ca3acf014', {headers: {"X-Auth-Token":"8ypwg55Yy4EK5lLPTshu6mx3mRMEBFTb", "X-Auth-User":"sb_orange"}});
    console.log(tmp);
    return tmp;
  }


}