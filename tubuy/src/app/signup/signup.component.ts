import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { UserModel } from '../user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../authenitcation-service/authentication.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    username: '',
    phone: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {

   }
  
  ngOnInit() {
  }

  response: any;

  onRegister() {
    this.auth.register(this.credentials).subscribe(() => {
      console.log('signup success!');
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }
}
