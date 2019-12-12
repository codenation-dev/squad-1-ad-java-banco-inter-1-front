import { Component, OnInit } from '@angular/core';
import { LogErrorService } from 'src/app/services/logerror.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogError } from 'src/app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  logsError: LogError[] = [];

  dashboard$: Observable<LogError[]>;
  
  constructor(private logErrorService: LogErrorService, private router: Router) {
  }

  ngOnInit() {

    this.dashboard$ = this.logErrorService.listErros();

    this.dashboard$.subscribe(
      (response) => {
        this.logsError = response;
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
