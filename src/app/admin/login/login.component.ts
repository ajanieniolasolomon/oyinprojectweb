import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormBuilder, FormGroup , Validators, AbstractControl} from '@angular/forms';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formgroup: FormGroup ;
  email: AbstractControl;
  password: AbstractControl;

  constructor(private service: AuthService , public formbuilder: FormBuilder, private router: Router) {

    this.formgroup = formbuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
});
this.email = this.formgroup.controls['email'];
this.password =  this.formgroup.controls['password'];
   }

  ngOnInit() {
  }
  onSubmit(formgroup) {
   // console.log(formgroup );
 this.service.login(formgroup).then(res => {
console.log(res);
this.router.navigate(['admin/home/dash']);
 })
 .catch(err => {
console.log(err);

 })
 ;
  }
}
