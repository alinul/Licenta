import { Component, OnInit } from '@angular/core';
import { SendDateService } from '../shared/calendar/send-date.service';
import {  AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  pendingOldDaysOffArray = new Map();
  newApprovedDaysOffArray: any[];
  usersArray: any[];

  constructor(public db: AngularFireDatabase, private angularFireAuth: AngularFireAuth, public dateService: SendDateService) {
    db.list('users/').valueChanges().subscribe((user) => {
      var x = [];
      for(let i = 0; i < Object.keys(user).length; i++){        
        x.push(user[i]['email'].substring(0,user[i]['email'].lastIndexOf("@")));   
        this.dateService.username = user[i]['email'].substring(0,user[i]['email'].lastIndexOf("@"))         
      }        
      this.usersArray = x;
    });    
   }

  approveDays(user){
    firebase.database().ref('users/' + user).update(
      {"approvedDaysOff" : this.newApprovedDaysOffArray}
      );
    console.log(user)
  }

  getPendingDays(user){
    this.db.list('users/'+user+'/pendingDaysOff').valueChanges().subscribe(days => {      
      this.pendingOldDaysOffArray.set(user, days);
      console.log(this.pendingOldDaysOffArray)
      });
  }

  ngOnInit(): void {
  }

}
