import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDateService {

  public showModal: BehaviorSubject<number> = new BehaviorSubject(0);
  public daysOffArray: any[];
  public username:  BehaviorSubject<String> = new BehaviorSubject('');;

  constructor() {
   }



}
