import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../authenitcation-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      console.log('not logged in');
      this.router.navigateByUrl('');
      return false;
    }
    console.log('logged in');
    return true;
  }

}
