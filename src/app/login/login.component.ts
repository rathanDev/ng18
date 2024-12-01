import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  getEmail() {
    return this.loginForm.get('email');
  }

  getPassword() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log('Login', this.loginForm.value);
    if (this.loginForm.valid) {
      console.log('Login', this.loginForm.value);
    }
  }

  callApi() {
    this.apiService.callApi();
  }
}
