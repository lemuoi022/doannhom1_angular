import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from'@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  username: string ="";
  email: string ="";
  password: string ="";
  confirmPassword: string ="";

  constructor(private router:Router, private http: HttpClient)
  {
  }
  save()
  {

    let bodyData = {

      "username":this.username,
      "password":this.password,
      "confirmPassword":this.confirmPassword,
      "email":this.email
    };
    this.http.post("http://localhost:8080/register",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully");
        // this.router.navigateByUrl('/login');
        // this.router.navigate('/login');
    });
  }

}
