import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models';

@Injectable({
    providedIn: 'root'
  })
export class SearchService{

    private searchFilter = new BehaviorSubject<String>('');
    private authUser = new BehaviorSubject<UserModel>(new UserModel);

    filter = this.searchFilter.asObservable();
    user = this.authUser.asObservable();

    constructor(){

    }

    updateFilter(filter: String){
        this.searchFilter.next(filter);
    }

    updateAuthUser(user: UserModel){
        this.authUser.next(user);
    }

}