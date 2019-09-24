import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { subscribeOn } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() ValuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(
      next => {
        // console.log('Registration successful');
        this.alertify.success('Registration successful');
      },
      error => {
        // console.log(error);
        this.alertify.error(error.message);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
    // console.log('Cancelled');
    this.alertify.warning('Cancelled');
  }

}
