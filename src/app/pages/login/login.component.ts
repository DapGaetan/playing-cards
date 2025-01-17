import { Component, inject, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { Credentials, LoginService } from '../../services/login/login.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy{

  private FormBuilder = inject(FormBuilder)
  private loginService = inject(LoginService)
  private router = inject(Router)

  private loginSubscription: Subscription | null = null;

  loginFormGroup = this.FormBuilder.group({
    'username': ['', [Validators.required]],
    'password': ['', [Validators.required]]
  });

  invalidCredentials = false;

  login() {
    this.loginSubscription = this.loginService.login(this.loginFormGroup.value as Credentials).subscribe({
      next: (result: User | null | undefined) => {
        this.navigateHome();
      },
      error: error => {
        this.invalidCredentials = true;
      }
    })
  }

  navigateHome() {
    this.router.navigate(['home'])
  }

  ngOnDestroy(): void {
    console.log(Error);
    this.loginSubscription?.unsubscribe();
  }
}
