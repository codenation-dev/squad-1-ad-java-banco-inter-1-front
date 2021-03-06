import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SearchService } from 'src/app/services/search.service';
import { UserModel } from 'src/app/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  private login: string = '/login'
  user: UserModel;

  constructor(location: Location,  
    private element: ElementRef, 
    private router: Router, 
    private userService: UserService,
    private searchService: SearchService) {
    this.location = location;
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  searchClicked(form){    
    this.searchService.updateFilter(form.value.filter)
  }

  async logout(){
    await this.userService.logout()
    this.router.navigateByUrl(this.login)
      .catch(e => {
      console.log(e)
    });
  }
}
