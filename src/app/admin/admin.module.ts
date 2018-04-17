import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { ClarityModule } from '@clr/angular';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AngularFirestore } from 'angularfire2/firestore';
const config = {
  apiKey: 'AIzaSyBoUZ_xabIoL1Gk0oDPNduKpyT2CApWKSw',
  authDomain: 'ajax-e13ed.firebaseapp.com',
  databaseURL: 'https://ajax-e13ed.firebaseio.com',
  projectId: 'ajax-e13ed',
  storageBucket: 'ajax-e13ed.appspot.com',
  messagingSenderId: '307872571060'
};
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
   ClarityModule,
   AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LoginComponent, BodyComponent, AddUserComponent, ViewUserComponent],
  providers: [AuthService, AuthGuard, AngularFirestore]
})
export class AdminModule { }
