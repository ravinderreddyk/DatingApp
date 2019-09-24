import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   model: any = {} ;
   constructor(public authService: AuthService, private alertify: AlertifyService, private route: Router) { }

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
      }, 
      () => {
        this.route.navigate(['/members']);
      });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    // console.log('logged out');
    this.alertify.message('logged out');
    this.route.navigate(['/home']);
  }

}
