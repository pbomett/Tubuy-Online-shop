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

  signupForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  credentials: TokenPayload = {
    email: '',
    username: '',
    phone: '',
    password: ''
  };

  constructor(
    private auth: AuthenticationService, 
    private router: Router,
    private formBuilder: FormBuilder
  ) {

   }
  
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      passwordConf: ['', Validators.required]
  });
  }

  response: any;

    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }


  onRegister() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }



    this.loading = true;
    this.auth.register(this.signupForm.value).subscribe(() => {
      console.log('signup success!');
      this.router.navigateByUrl('/login');
    }, (err) => {
      console.error(err);
    });
  }
}
