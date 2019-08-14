import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MustMatch} from '../mustmatch';


@Component({
  selector: 'app-testreactive',
  templateUrl: './testreactive.component.html',
  styleUrls: ['./testreactive.component.css']
})
export class TestreactiveComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit() { 
    
    this.registerForm=this.formBuilder.group({
   
   firstName:["", [Validators.required,Validators.pattern('[a-z A-Z]*')]],
   
   lastName:["", [Validators.required,Validators.pattern('[a-z A-Z]*')]],
   
   email:["", [Validators.required,Validators.email]],

   
   genre:["", Validators.required],

   password:["", [Validators.required,Validators.minLength(6)] ],

   confirmpassword:["", Validators.required ]
   


    } ,
    { 
      validator:MustMatch("password","confirmpassword") //

    }
    
    );


  } 

  


  onSubmit() {  
    //submit button clicked , so submitted is true , this is used in the HTML file to trigger errors messages after submit button neing clicked
      this.submitted = true;
      //this gives you an idea of submitted form through console
   console.log(this.registerForm.controls)  

      // stop here if form is invalid
      if (this.registerForm.invalid) { 
          return;
      }
         //else
      alert('SUCCESS!! \n\n' + JSON.stringify(this.registerForm.value))
  } 

  


}
