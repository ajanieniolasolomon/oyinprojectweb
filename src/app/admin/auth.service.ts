import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  UserCollectionRef: AngularFirestoreCollection<User>;
  User$: Observable<User[]>;
  constructor(private firebaseAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = firebaseAuth.authState;
    this.UserCollectionRef = this.afs.collection<User>('user');
    this.User$ = this.UserCollectionRef.valueChanges();
  }
  login(d) {
  return  this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(d.value.email, d.value.password);
  }
  Register(data) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
     .then(dat => {
   this.Saveinfor(dat, data);

     });
   }
   Saveinfor(dat, data) {
   return this.UserCollectionRef.add({ uid:dat.uid,email: data.email, role:data.role });

   }

}
export interface User {
  email: string;
  role:  string;
  uid: string;
}