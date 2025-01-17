import { Component, inject } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatSelectModule],
templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private FormBuilder = inject(FormBuilder)

  loginFormGroup = this.FormBuilder.group({
    'username': ['', [Validators.required]],
    'password': ['', [Validators.required]]
  });

  invalidCredentials = false;

  login() {
    
  }
}
