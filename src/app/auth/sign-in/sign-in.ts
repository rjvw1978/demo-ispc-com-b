import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {

  private formBuilder = inject(FormBuilder);

  signInForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]], 
    });

  get Password() 
  {
    return this.signInForm.get("password");
  }

  get Email()
  {
    return this.signInForm.get("email");
  }
    
    enviar()
    {
      if (this.signInForm.valid){
        console.log(this.signInForm.value)
      }
      else
      {
        alert("No paso la validación")
      }
    }
}
