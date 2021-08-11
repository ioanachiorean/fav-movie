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
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', Validators.required)
  })

  get username()
{
    return this.form.get('username');
}

  constructor() {
  }

  ngOnInit(): void {
  }


}
