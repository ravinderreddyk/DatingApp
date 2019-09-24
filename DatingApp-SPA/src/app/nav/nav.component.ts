import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   model: any = {} ;
   constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        // console.log('login is successful');
        this.alertify.success('Login is successful');
      },
      error => {
        // console.log(error);
        this.alertify.error(error.message);
      });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    // console.log('logged out');
    this.alertify.message('logged out');
  }

}
