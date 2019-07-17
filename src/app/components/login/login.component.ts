import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: Login;

  constructor() {
    this.login = new Login('','');
    
   }
   

   onSubmit() {
     if(this.login.user=='jared' && this.login.password== '123'){
      alert('Welcome!');
     } else {
       alert('Ingresa los datos correctos');
       this.login.user='';
       this.login.password='';
     }
   }
  



  ngOnInit(){}

  

}
