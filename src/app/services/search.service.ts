import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class SearchService{

    private searchFilter = new BehaviorSubject<String>('');
    filter = this.searchFilter.asObservable();

    constructor(){

    }

    updateFilter(filter: String){
        this.searchFilter.next(filter);
    }

}