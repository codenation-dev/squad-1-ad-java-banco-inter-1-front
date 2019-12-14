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
  actualPage: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;
  pagination: number[] = [];

  // dashboard$: Observable<LogError[]>;
  dashboard$: Observable<Content>;
  
  constructor(private logErrorService: LogErrorService, private router: Router) {
  }

  ngOnInit() {
    this.getLogs();
  }

  ngOnDestroy(): void {
    
  }

  getPage(page){
    this.actualPage = page - 1;
    this.getLogs();
  }

  isActualPage(page){
    if(page === this.actualPage){
      return true;
    }else{
      return false;
    }
  }

  nextPage(event: Event){
    if(this.actualPage === (this.totalPages-1)){
      return false;
    }
    this.actualPage = this.actualPage + 1;
    this.getLogs();
  }

  previusPage(){
    if(this.actualPage === 0){
      return false;
    }
    this.actualPage = this.actualPage - 1;
    this.getLogs();
  }

  getLogs(){
    // this.dashboard$ = this.logErrorService.listErros();
    this.dashboard$ = this.logErrorService.listErrosPagination(this.actualPage);

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
        this.pagination = Array(1)//Array(response.totalPages);//Array(5)
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
      },
      error => {

        console.log(error);

      }
    );  
  }
}
