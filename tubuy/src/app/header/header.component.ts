import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authenitcation-service/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  username: string;

  ngOnInit() {
    //console.log(this.auth.getUserDetails());
  }

  onCart(){
    
  }
}
