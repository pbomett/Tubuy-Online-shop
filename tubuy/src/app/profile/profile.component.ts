import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authenitcation-service/authentication.service';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  details: UserDetails[] = [];

  constructor(private auth: AuthenticationService, private snackBar: MatSnackBar) {}

  ngOnInit() {    
    this.auth.profile().pipe(first()).subscribe(user => {
      this.details = user;
      this.snackBar.open('Profile loaded', 'OK', {duration: 3000}); 
      //console.log(this.details);
    }, (err) => {
      console.error(err);
    });
  }
}
