import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {  AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { SendDateService } from '../shared/calendar/send-date.service';

@Component({
  selector: 'app-main-calendar',
  templateUrl: './main-calendar.component.html',
  styleUrls: ['./main-calendar.component.css']
})
export class MainCalendarComponent {

  public db: any[];
  public items: Observable<any>[];
  
  public usersArray: any[];
  
  constructor(idb:AngularFireDatabase, private angularFireAuth: AngularFireAuth,public dateService: SendDateService){
    idb.list('users/').valueChanges().subscribe((user) => {
      var x = [];
      for(let i = 0; i < Object.keys(user).length; i++){        
        x.push(user[i]['email'].substring(0,user[i]['email'].lastIndexOf("@")));   
        this.dateService.username = user[i]['email'].substring(0,user[i]['email'].lastIndexOf("@"))         
      }        
      this.usersArray = x;
    });       
  }
  openModal(){
    this.dateService.showModal.next(1);
    console.log(this.dateService.showModal)
  }
}
