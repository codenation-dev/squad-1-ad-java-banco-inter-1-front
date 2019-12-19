import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthModel, UserModel } from 'src/app/models';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  auth = new UserModel;
  userCreated: boolean = false;
  userCreateFail: boolean = false;
  userRequest: boolean = false;

  public nameApp: string = environment.NAME_APP;

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit() {
  } 

  async registerUser(){
    
    this.resetNotifications()

    const user = await this.userService.create(this.auth);

    if(user){
      this.success();
    }else{
      this.fail();
    }
    // .subscribe(
    //   (response) => {
    //     console.log(response)
    //     this.userCreated = true;
    //     console.log(this.userCreated)
    //   },
    //   error => {
    //     const message = error
    //     this.userCreateFail = true;
    //     this.router.navigate(['/register']);
    //     console.log(error);
    //   }
    // );
  }

  private resetNotifications(){
    this.userRequest = true;
    this.userCreated = false;
    this.userCreateFail = false;
  }

  private success(){
    this.userRequest = false;
    this.userCreated = true
  }

  private fail(){
    this.userRequest = false;
    this.userCreateFail = true
  }

}
