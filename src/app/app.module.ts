import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptor } from './auth.interceptor';
import { LazyComponComponent } from './lazy-compon/lazy-compon.component';
import { LoginComponent } from './login/login.component';
import { OutletComponComponent } from './outlet-compon/outlet-compon.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponComponent,
    OutletComponComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
