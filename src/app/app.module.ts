import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyComponComponent } from './lazy-compon/lazy-compon.component';
import { OutletComponComponent } from './outlet-compon/outlet-compon.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponComponent,
    OutletComponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
