import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authenitcation-service/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  details: UserDetails[] = [];

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {    
    this.auth.profile().pipe(first()).subscribe(user => {
      this.details = user;
      console.log(this.details);
    }, (err) => {
      console.error(err);
    });
  }
}
