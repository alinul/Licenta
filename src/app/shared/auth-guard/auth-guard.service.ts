import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireDatabase }from '@angular/fire/database'; 

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private angularFireAuth: AngularFireAuth, public router: Router, private db: AngularFireDatabase) { }
   
  isAdmin: boolean;
  isloggedIn: boolean;

  canActivate(): boolean {     
    
    if(this.angularFireAuth.auth.currentUser !== null){
      this.isloggedIn = true;
      this.db.object("/users/" + this.angularFireAuth.auth.currentUser.email.substring(0,this.angularFireAuth.auth.currentUser.email.lastIndexOf("@"))).valueChanges().subscribe(details => {
        if(details["role"] === "admin"){
          this.isAdmin = true;
        }
      })
    }   
    if (this.isAdmin && this.isloggedIn){  
      return true;
    }
  }
}
