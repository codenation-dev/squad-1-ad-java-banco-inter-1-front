import { Component, OnInit } from '@angular/core';
import { LogErrorService } from 'src/app/services/logerror.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogError, DashBoardItem } from 'src/app/models';
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

  last: boolean = false;

  // dashboard$: Observable<LogError[]>;
  dashboard$: Observable<Content>;
  dashboardItem$: Observable<DashBoardItem[]>;
  
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

        this.pagination = Array(1)//Array(response.totalPages);//Array(5)
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        this.last = response.last || false;
      },
      error => {

        if(error.status === 403 || error.status === 401){
          this.router.navigateByUrl('/login')
            .catch(e => {
              this.router.navigate(['']);
            });
        }
        console.log(error);

      }
    ); 
    
    this.dashboardItem$ = this.logErrorService.getDashboard();
    this.dashboardItem$.subscribe(
      (response) => {

        response.map((item)=>{
          if(item.environment === 'DEV'){
            this.countDev = item.count;
          }else if(item.environment === 'HML'){
            this.countHml = item.count  ;
          }else if(item.environment === 'PROD'){
            this.countProd = item.count;
          }
        })

      },
      error => {

        console.log(error);

      }
    ); 
    
  }
  
}
