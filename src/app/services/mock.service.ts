import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { environment } from '../../environments/environment';
import { UserModel } from '../models';
import { AuthenticationService } from '../authentication';
import { UserService } from './user.service';
import * as faker from 'faker';
import { LogErrorRequest } from '../models/log.request';
import { LogErrorService } from './logerror.service';


@Injectable({
  providedIn: 'root'
})
export class MockService {

  private userModel = new UserModel
  private fail: Boolean = false;
  private ok: Boolean = false;

  private mockUser = {
    isCreated: false,
    isLogged: false,
    authorization: undefined
  }

  constructor(private http: HttpClient,
    private jsonConvert: JsonConvert,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private logErrorServices: LogErrorService
  ) {
    this.userModel.name = faker.name.findName()
    this.userModel.email = faker.internet.email();
    this.userModel.password = environment.PASS_MOCK;
  }

  async queuePopulator() {
    this.registerUser();
    this.login();
    this.generateLogs(30, false);
  }

  registerUser() {
    // this.userService.create(this.userModel).subscribe(
    //   (response) => {
    //     console.log(`USUARIO CRIADO COM SUCESSO\n
    //     Dados de acesso:\n
    //     Email: ${response.email}\n
    //     Senha: ${this.userModel.password}\n
    //     =======================`)
    //     this.mockUser.isCreated = true;
    //   },
    //   error => {
    //     this.fail = true
    //     console.log(error);
    //   }
    // );
  }

  async login() {
    while (!this.mockUser.isCreated) {
      await this.delay(1000)
    }
    this.userService.login(this.userModel.email, this.userModel.password)
      .subscribe(
        (response) => {
          console.log(`USUARIO AUTENTICADO\n
            Token de acesso: ${response.authorization}\n
            =======================`)
          this.mockUser.authorization = response.authorization;
          this.mockUser.isLogged = true;
        },
        error => {
          this.fail = true
          console.log(error);
        }
      );
  }

  async generateLogs(size: number, globalMock: boolean) {
    while (!globalMock && !this.mockUser.isLogged) {
      await this.delay(1000)
    }

    for (var i = 0; i < size; i++) {

      const logError = new LogErrorRequest(
        this.getTitle(),
        this.getDetails(),
        this.getEnvironment(),
        this.getErrorLevel()
      )

      try {
        this.logErrorServices.create(logError).subscribe(
          (response) => {
            console.log('Log created...')
          }, error => {
            this.fail = true
            console.log(error);
          }
        )
      } catch (error) {
        this.fail = true
        console.log(error);
      }
    }
  }

  private getRandoKey(size: number) {
    return Math.floor((Math.random() * size) + 1);
  }

  private getTitle() {
    return faker.random.word()
  }

  private getDetails() {
    return faker.random.words(10)
  }

  private getEnvironment() {
    const map = new Map<number, string>()
    map.set(1, 'DEV')
    map.set(2, 'HML')
    map.set(3, 'PROD')
    return map.get(this.getRandoKey(map.size));
  }

  private getErrorLevel() {
    const map = new Map<number, string>()
    map.set(1, 'ERROR')
    map.set(2, 'WARNING')
    map.set(3, 'DEBUG')
    return map.get(this.getRandoKey(map.size));
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

}
