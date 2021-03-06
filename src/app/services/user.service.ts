import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonConvert } from 'json2typescript';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthenticationContextModel, UserModel, AuthModel } from '../models';
import { LoginRequest } from '../models/login.request';
import { AuthenticationService } from '../authentication';
import { RegisterRequest } from '../models/register.request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private jsonConvert: JsonConvert,
              private authenticationService: AuthenticationService) {
  }

  async logout(){
    if(this.authenticationService.hasActiveUser()){
      await this.authenticationService.logout();
    }
  }

  getUser(): Observable<UserModel> {

    const authContext = this.authenticationService.getAuthenticationContext();

    if (!authContext) {
      return null;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'access-token': authContext.authorization
      }),
    };

    return this.http.get<any>(`${environment.API_BASE_URL}usersinfos`, httpOptions)
      .pipe(
        map(response => this.jsonConvert.deserializeObject(response, UserModel))
      );
  }

  login(username: string, password: string): Observable<AuthenticationContextModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    };

    const loginRequest = new LoginRequest(
      username,
      password
    );

    // @ts-ignore
    return this.http.post<any>(environment.API_BASE_URL + 'login', loginRequest, httpOptions)
      .pipe(
        map(response => {
          const authContext = new AuthenticationContextModel();
          // @ts-ignore
          authContext.authorization = response.headers.get('authorization');
          // @ts-ignore
          response.body = { token: authContext.authorization } 
          return authContext;
        }),
        tap(authContext => {
          // @ts-ignore
          this.authenticationService.login(authContext);
        })
      );
  }

  async create(user: UserModel){ //: Observable<UserModel> 
    
    const request = new RegisterRequest(user.name,user.email,user.password);

    // return this.http
    //   .post(`${environment.API_BASE_URL}users`, request, {observe: 'response'})
    //   .pipe(map(response => {


    //     return this.jsonConvert.deserializeObject(response.body, UserModel);
    //   }));
    try {

      return await this.http.post(`${environment.API_BASE_URL}users`, request, {observe: 'response'}).toPromise();

    } catch (error) {
      
      return null;

    }

  }

}
