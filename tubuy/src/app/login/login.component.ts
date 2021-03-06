import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authenitcation-service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  //returnUrl: string;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private snackbar: MatSnackBar,
      private authenticationService: AuthenticationService) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // reset login status
      //this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

  

      this.loading = true;
      this.authenticationService.login(this.loginForm.value)
          .pipe(first())
          .subscribe(
              data => {
                this.snackbar.open('Logged in successfully', 'OK', {
                    duration: 3000,
                  });
                  this.router.navigate(['/profile']);
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }
}