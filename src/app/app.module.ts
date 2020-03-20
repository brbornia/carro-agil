import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService} from './auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/br';
registerLocaleData(localeBr, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    OAuthModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
