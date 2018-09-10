import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authenitcation-service/authentication.service';
import { ItemModel } from '../item.model';
import { DataService } from '../data-service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthenticationService, private dataService: DataService, private router: Router) { }

  username: string;
  item: ItemModel;
  searchInput: any;
  searchbox: any;

  ngOnInit() {
    //console.log(this.auth.getUserDetails());
  }

  searchItem(data){
    this.searchbox =="";
    this.searchInput = data;
    
    if(this.searchInput==""){

    }
    else{
      //console.log(this.searchInput);
    this.router.navigateByUrl(`/search/${this.searchInput}`);
    }
    
  }

  onCart(){
    
  }
}
