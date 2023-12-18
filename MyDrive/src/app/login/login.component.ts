import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  [x: string]: any;
  email: string = '';
  password: string = '';
  message = '';

  constructor(private router: Router, private http: HttpClient) {}

  Login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      "email": this.email,
      "password": this.password
    };

    this.http
      .post('http://localhost:8080/login', bodyData, {
        responseType: 'text',
      })
      .subscribe((resultData: any) => {
        console.log(resultData);

        if (resultData == 'success') {
          this.router.navigate(['home']);
        } else {
          alert('Incorrect Email and Password not match');
        }
      });
  }
}
