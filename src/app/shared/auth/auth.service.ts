import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase }from '@angular/fire/database'; 
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase';


@Injectable({
    providedIn:  'root'
})

export  class  AuthService {
  
  userData: Observable<firebase.User>;
  userList: Observable<any[]>;  

  constructor(private angularFireAuth: AngularFireAuth,private db: AngularFireDatabase, private router: Router) {
    this.userData = angularFireAuth.authState;
  }
    
  login(email: string, password: string) {
    this.angularFireAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('You are Successfully logged in!');
     })
    .catch(err => {
    console.log('Something is wrong:',err.message);
    });    
  }

  SignOut() {
    this.angularFireAuth
    .auth
    .signOut();
    }

  SignUp(email: string, password: string) {
    this.angularFireAuth
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
    console.log('You are Successfully signed up!', res);
    this.writeUserData(res.user.email, "basic" )
    })
    .catch(error => {
    console.log('Something is wrong:', error.message);
    });
  }
  writeUserData(email, role) {
    firebase.database().ref('users/' + email.substring(0, email.lastIndexOf("@"))).set({  
      email: email,          
      role: role,   
      pendingDaysOff: '',
      approvedDaysOff: ''
    });
  }     
  }
