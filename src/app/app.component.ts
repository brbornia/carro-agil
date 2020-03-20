import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Car {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carro-agil';
  cars: Car[];

  constructor(private auth: AuthService, private http: HttpClient) { }

  get givenName() {
    const name = this.auth.givenName();
    if (name && (!this.cars || this.cars.length === 0) ){
      this.getCars();
    }
    return name;
  }

  login() {
    this.auth.login();
  }

  getCars() {
    const  url = 'https://fy1ozme5l1.execute-api.us-west-2.amazonaws.com/HBSIS/';
    this.http.get<Car[]>( url, {headers: {Authorization: this.auth.getAccessToken()}} )
      .subscribe(resp => {
        this.cars = resp;
        console.log(this.cars);
      });
  }

}
