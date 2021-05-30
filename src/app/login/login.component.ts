import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  email: string;
  password: string;

  constructor(private formBuilder: FormBuilder, public authenticationService:AuthService) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  login() {
    this.authenticationService.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  logout() {
    this.authenticationService.SignOut();
    }

    signUp() {
      this.authenticationService.SignUp(this.email, this.password);
      this.email = '';
      this.password = '';
      }

  ngOnInit(): void {
  }

}
