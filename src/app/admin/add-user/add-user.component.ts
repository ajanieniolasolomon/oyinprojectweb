import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup , Validators, AbstractControl} from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  email: AbstractControl;
  password: AbstractControl;
  role: AbstractControl;

  formgroup: FormGroup ;
  constructor(public formbuilder: FormBuilder,private service: AuthService) {
    this.formgroup = formbuilder.group({
      email: ['',  Validators.email],
      password: ['',  Validators.required],
      role: ['', Validators.required]

    });
    this.email = this.formgroup.controls['email'];
    this.password =  this.formgroup.controls['password'];
    this.role =  this.formgroup.controls['role'];

   }

  ngOnInit() {
  }
  onSubmit(formgroup) {
    return this.service.Register(formgroup.value).then((data)  => console.log(data))
    .catch(error => {
      console.log(error);
    });

  }

}
