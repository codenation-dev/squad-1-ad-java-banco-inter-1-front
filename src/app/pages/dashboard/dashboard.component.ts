import { Component, OnInit } from '@angular/core';
import { LogErrorService } from 'src/app/services/logerror.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogError } from 'src/app/models';
import { Content } from 'src/app/models/content-request';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  logsError: LogError[] = [];
  countDev: number = 0;
  countHml: number = 0;
  countProd: number = 0;

  // dashboard$: Observable<LogError[]>;
  dashboard$: Observable<Content>;
  
  constructor(private logErrorService: LogErrorService, private router: Router) {
  }

  ngOnInit() {

    // this.dashboard$ = this.logErrorService.listErros();
    this.dashboard$ = this.logErrorService.listErrosPagination();

    this.dashboard$.subscribe(
      (response) => {
        this.logsError = response.content;

        this.logsError.map(item => {
          if(item.environment === 'DEV'){
            this.countDev = this.countDev + 1;
          }else if(item.environment === 'HML'){
            this.countHml = this.countHml + 1  ;
          }else if(item.environment === 'PROD'){
            this.countProd = this.countProd + 1;
          }
        })
        console.log(response)

      },
      error => {

        console.log(error);

      }
    );  
  }

  ngOnDestroy(): void {
    
  }
}
