import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { C1Component } from './Components/c1/c1.component';
import { C2Component } from './Components/c2/c2.component';
import { DefaultComponent } from './default/default.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes) //serve per importare tutte le routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }