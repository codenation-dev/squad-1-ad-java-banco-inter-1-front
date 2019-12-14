import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonConvert } from 'json2typescript';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LogError } from '../models';
import { AuthenticationService } from '../authentication';
import { LogErrorRequest } from '../models/log.request';
import { Content } from '../models/content-request';

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
    return this.http.get<LogError[]>(environment.API_BASE_URL + 'logerrors', httpOptions)
      .pipe(
        map(response => {

          console.log(response)
          // @ts-ignore
          return this.jsonConvert.deserializeArray(response.body.content, LogError);

        })
      );
  }

  listErrosPagination(page: number): Observable<Content> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    };

    let content = new Content;

    // @ts-ignore
    return this.http.get<Content>(environment.API_BASE_URL + 'logerrors?size=8&page='+page, httpOptions)
      .pipe(
        map(response => {

          console.log(response)
          // @ts-ignore
          content.totalElements = response.body.totalElements;
          // @ts-ignore
          content.numberOfElements = response.body.numberOfElements;
          // @ts-ignore
          content.totalPages = response.body.totalPages;
          // @ts-ignore
          content.size = response.body.size;
          // @ts-ignore
          content.number = response.body.number;
          // @ts-ignore
          content.first = response.body.first;
          // @ts-ignore
          content.empty = response.body.empty;
          // @ts-ignore
          const logs = this.jsonConvert.deserializeArray(response.body.content, LogError);
          content.content = logs;
      
          return content;//this.jsonConvert.deserializeArray(response.body.co, Content);

        })
      );
  }

  create(logerror: LogErrorRequest): Observable<LogError> {
    return this.http
      .post(`${environment.API_BASE_URL}logerrors`, logerror, {observe: 'response'})
      .pipe(map(response => {
        return this.jsonConvert.deserializeObject(response.body, LogError);
      }));
  }

}
