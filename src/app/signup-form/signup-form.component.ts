import { Car } from './../tutorial/Car';
import { UsernameValidators } from './username.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
       
      username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ],
      UsernameValidators.shouldBeUnique
    ),
       password: new FormControl('', Validators.required)
  })

   
  });

  login(){
    // let isValid = authService.login(this.form.value);
    // if (!isValid) {
      this.form.setErrors({
        invalidLogin: true
      });
    }
  

  get username()
{
    return this.form.get('account.username');
}

  constructor() {
  }

  ngOnInit(): void {
  }


}
