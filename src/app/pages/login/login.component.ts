import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthModel } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  auth = new AuthModel;

  redirectUrl = '/dashboard';

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login() {
    this.userService.login(this.auth.email, this.auth.password)
      .subscribe(
        (response) => {
          this.router.navigateByUrl(this.redirectUrl)
            .catch(e => {
              this.router.navigate(['']);
            });
        },
        error => {
          const message = error
          // this.toastrService.error(message, 'Ops!', {
          //   timeOut: 3000
          // });

          console.log(error);
        }
      );
  }

}
