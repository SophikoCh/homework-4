import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.scss']
})
export class RegistrationComponentComponent implements OnInit {

 
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(17)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(17)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(13), Validators.pattern(/^\+995\d{9,12}$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{}|;:'",.<>?])(?=.*[0-9])[A-Za-z0-9!@#$%^&*()-_=+{}|;:'",.<>?]{8,}$/)]],
      confirmPassword: ['', Validators.required],
      companyName: ['', Validators.required],
    }, { validators: [passwordValidator] })
  }

  ngOnInit(): void { }

  get userName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  get email() {
    return this.userForm.get('email');
  }
  get mobile() {
    return this.userForm.get('mobile');
  }
  get password() {
    return this.userForm.get('password');
  }
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }
  get companyName() {
    return this.userForm.get('companyName');
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}


export const passwordValidator = (control: AbstractControl) => {
  let password = control.get('password');
  let confirm_password = control?.get('confirmPassword');

  let doesntMatch = password?.value !== confirm_password?.value;

  return doesntMatch ? { passwordNotMatch: true } : null;
}

 export class Html2Component {
}


