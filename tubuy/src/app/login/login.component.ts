import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { UserModel } from '../user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userinfo: UserModel[];

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
  }

  response: any;

  onRegister(values: any){
      console.log(values);
      this.dataService.signin(values).subscribe((data) => {
        this.response = data;
        console.log("Logged In!");
        console.log(this.response);
      });
  }
}
