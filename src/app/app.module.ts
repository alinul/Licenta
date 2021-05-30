import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { MainCalendarComponent } from './main-calendar/main-calendar.component';
import { CalendarRowComponent } from './calendar-row/calendar-row.component';
import { ModalCerereComponent } from './modal-cerere/modal-cerere.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuardService } from './shared/auth-guard/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';

const firebaseConfig = {
  apiKey: "AIzaSyB-kuKm1hlGqy9NYPDivEietrZ7I8R5LSI",
  authDomain: "licenta-af00f.firebaseapp.com",
  databaseURL: "https://licenta-af00f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "licenta-af00f",
  storageBucket: "licenta-af00f.appspot.com",
  messagingSenderId: "580003840108"
};

@NgModule({
  declarations: [
    AppComponent,
    MainCalendarComponent,
    CalendarRowComponent,
    ModalCerereComponent,
    LoginComponent,
    NavigationComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule 
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
