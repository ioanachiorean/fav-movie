import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  login(){
    // let isValid = authService.login(this.form.value);
    // if (!isValid) {
      this.form.setErrors({
        invalidLogin: true
      });
  }

  form = new FormGroup({
    account: new FormGroup({
      // OLD PASSWORD
      oldPassword : new FormControl('', 
      [Validators.required,
      PasswordValidators.shouldBeUnique]

      ),

      //  NEW PASSWORD
      newPassword: new FormControl('', 
      [ Validators.required,
      Validators.minLength(3),
      PasswordValidators.cannotContainSpace ]
      ),

      // CONFIRM NEW PASSWORD 
      confirmNewPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      PasswordValidators.cannotContainSpace ]
      )
  })

   
  });

  get oldPassword()
  {
    return this.form.get('account.oldPassword');
  } 

  get newPassword()
  {
      return this.form.get('account.newPassword');
  }

  get confirmNewPassword()
  {
      return this.form.get('account.confirmNewPassword');
  }


  

  comparePasswords(){
    if (this.newPassword === this.confirmNewPassword)
     return null;

    else return alert("The confirmed password doesn't match the new password.")
  }
  
  constructor() {

  }

  ngOnInit(): void {
  }


}
