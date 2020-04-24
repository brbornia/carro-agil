import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/br';
import { environment } from '../environments/environment';
registerLocaleData(localeBr, 'pt-BR');

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    AuthService,
    { provide: MAT_DATE_LOCALE, useValue: environment.defaultLanguage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
