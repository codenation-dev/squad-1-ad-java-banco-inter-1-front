import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthModel } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  auth = new AuthModel;

  constructor(private userService: UserService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login() {

    console.log(this.auth);
    console.log(this.userService)
    this.userService.login(this.auth.email, this.auth.password)
      .subscribe(
        (response) => {
          console.log(response)
          // this.router.navigateByUrl(this.redirectUrl)
          //   .catch(e => {
          //     this.router.navigate(['']);
            // });
        },
        error => {
          const message = error.error.error;
          // this.toastrService.error(message, 'Ops!', {
          //   timeOut: 3000
          // });

          console.log(error.error.error);
        }
      );
  }

}
