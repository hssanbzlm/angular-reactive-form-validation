import {  AbstractControl, FormGroup } from '@angular/forms';

// In case you want to create a custom function for a specific control 
// In this example the form accept only first name that contains 'a'
// Then you have to add NameValidator function to name attiribute 
// first name ["",[validators.required,NameValidator]]
// and of course don't forget to import it in testeactive.components.ts file

//export function NameValidator(control:AbstractControl)
//{ 
    //let name=control.value;
    //if(name.indexOf("a")==-1)
    //return { 
       // isError:true

    //}; 

 // return null;
  
  
 // }

  export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) 
        {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
