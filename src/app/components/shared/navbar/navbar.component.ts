import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router, private auth:AuthService) {
    auth.handleAuthentication();
   }

  ngOnInit() {
  }

  login(){
    console.log('login in');
    this.auth.login();
    
  }

  logout(){
    console.log('loging out');    
    this.auth.logout();
  }

}
