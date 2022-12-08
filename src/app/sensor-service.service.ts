import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Sensor } from './sensor';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  private sensorsUrl = 'https://octave-api.sierrawireless.io/v5.0/orangesb/event/s636d2846c1fe893ca3acf014';
  httpOptions = {
    headers: new HttpHeaders({'X-Auth-Token': '8ypwg55Yy4EK5lLPTshu6mx3mRMEBFTb', 'X-Auth-User': 'sb_orange'})
  };

  constructor(
    private http: HttpClient,
    ) { }

    getSensors(): Observable<Sensor[]> {
      return this.http.get<Sensor[]>(this.sensorsUrl).pipe(
        tap(_ => console.log(`fetched datas`)),
        catchError(this.handleError<Sensor[]>('getSensors', [])));
    };

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); 
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    };
}
