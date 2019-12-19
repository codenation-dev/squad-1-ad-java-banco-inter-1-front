import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private mockService: MockService) { }

  ngOnInit() {
    
  }

  generateLogs(){
    console.log('Gerando 50 eventos')
    this.mockService.generateLogs(50, true);
  }

}


