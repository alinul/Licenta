import { Component, OnInit } from '@angular/core';
import { SendDateService } from '../shared/calendar/send-date.service';
import {  AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase';

@Component({
  selector: 'app-modal-cerere',
  templateUrl: './modal-cerere.component.html',
  styleUrls: ['./modal-cerere.component.css']
})
export class ModalCerereComponent implements OnInit {  

  month: string;
  day: string;
  pendingOldDaysOffArray: any[];
  daysOffStartDate = new Date;
  daysOffEndDate =new Date;
  fdb = firebase.firestore();

  constructor(public db: AngularFireDatabase, private angularFireAuth: AngularFireAuth, public dateService: SendDateService) {  
    this.db.list('users/' + this.angularFireAuth.auth.currentUser.email.substring(0,this.angularFireAuth.auth.currentUser.email.lastIndexOf("@")) +'/pendingDaysOff').valueChanges().subscribe(days => {
      this.pendingOldDaysOffArray = days;
      console.log(days)
    });      
  }

  closeModal(){
    
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.daysOffStartDate = new Date(dateRangeStart.value);
    this.daysOffEndDate = new Date(dateRangeEnd.value);
  }

  getDaysArray(start, end) {
    for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
      arr.push(new Date(dt).toLocaleDateString('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric'  }));
    }
    return arr; 
     
  };

 

  writeUserData() {
        
    var newDaysOffArray = this.pendingOldDaysOffArray.concat(this.getDaysArray(this.daysOffStartDate, this.daysOffEndDate).filter(x => this.pendingOldDaysOffArray.every(y => y !== x)))
    
    firebase.database().ref('users/' + this.angularFireAuth.auth.currentUser.email.substring(0,this.angularFireAuth.auth.currentUser.email.lastIndexOf("@"))).update(
      {"pendingDaysOff" : newDaysOffArray}
      );
    this.dateService.daysOffArray = newDaysOffArray;
    this.dateService.showModal.next(0);
    
  }    

  ngOnInit(): void {
    
  }

}
