import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthModel } from 'src/app/models';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  auth = new AuthModel;
  messageReturnApi: string = '';

  public nameApp: string = environment.NAME_APP;
  dashboardUrl = '/dashboard';
  registerUrl = '/register';

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login() {
    this.userService.login(this.auth.email, this.auth.password)
      .subscribe(
        (response) => {
          this.router.navigateByUrl(this.dashboardUrl)
            .catch(e => {
              this.router.navigate(['']);
            });
        },
        error => {
          this.messageReturnApi = error.error.message;
        }
      );
  }

  register(){
    this.router.navigateByUrl(this.registerUrl)
        .catch(e => {
          console.log(e);
    });
  }

}
