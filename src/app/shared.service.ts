import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataSource = new BehaviorSubject<string>('default data');
  currentData = this.dataSource.asObservable();
  constructor() { }

  changeData(data:any){
    console.log(data,'data from service')
    this.dataSource.next(data)
  }
}
