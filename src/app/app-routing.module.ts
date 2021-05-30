import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MainCalendarComponent } from './main-calendar/main-calendar.component';
import { AuthGuardService } from './shared/auth-guard/auth-guard.service';
;

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'calendar', component: MainCalendarComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes      
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}