import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonConvert } from 'json2typescript';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LogError } from '../models';
import { AuthenticationService } from '../authentication';

@Injectable({
  providedIn: 'root'
})
export class LogErrorService {

  constructor(private http: HttpClient,
              private jsonConvert: JsonConvert,
              private authenticationService: AuthenticationService) {
  }

  listErros(): Observable<LogError[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    };

    // @ts-ignore
    return this.http.get<LogError[]>(environment.API_BASE_URL + 'logerror', httpOptions)
      .pipe(
        map(response => {

          console.log(response)
          // @ts-ignore
          return this.jsonConvert.deserializeArray(response.body, LogError);

        })
      );
  }

}
