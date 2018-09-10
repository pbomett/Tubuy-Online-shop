import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../authenitcation-service/authentication.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router, private snackBar: MatSnackBar) { }

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      console.log('not logged in');
      this.snackBar.open('Please log in first!', 'OK', {duration: 3000}); 
      this.router.navigateByUrl('');
      return false;
    }
    console.log('logged in');
    return true;
  }

}
