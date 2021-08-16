import { ChangePasswordComponent } from './change-password.component';
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export class PasswordValidators {   
   // CANNOT CONTAIN SPACE 
 static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
         if((control.value as string ).indexOf(' ') >= 0)
            return { cannotContainSpace: true };
            
            return null;
         }  

   // SHOULD BE UNIQUE 
 static shouldBeUnique(control:AbstractControl) : Promise < ValidationErrors | null> {
     return new Promise((resolve, reject) => {
    
    setTimeout(() => { 
        if(control.value === '1234')
            resolve ({ shouldBeUnique: true }) ;
         else 
            resolve (null);
    },2000);
    });
 }

   //  SHOULD MATCH THE OLD PASSWORD
//  static shouldMatchTheNewPassword (control:AbstractControl) : Promise < ValidationErrors | null>{
//    return new Promise((resolve, reject) => {
//    setTimeout(() => { 
      
//          if((control.value as string) === ChangePasswordComponent.value.newPassword)
//             resolve ({ shouldMatchTheNewPassword: true }) ;
//          else 
//             resolve (null);
//    },2000);
   
// });

}





}
