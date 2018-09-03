import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../item.model';
import { DataService } from '../data-service/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {

  item: ItemModel;
  name: string;
  default_image: number;
  itemName; price; codename; moq;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      //console.log(this.name);
  
    })
    this.dataService.getItemByName(this.name).subscribe((data: ItemModel) => {
      this.item = data;
      
      if (this.item){
        this.itemIsPresent();
      }

    });
  }

  viewItem(itemId: String){
    //console.log(`/items/${itemId}`);
    this.router.navigateByUrl(`/item/${itemId}`);
  }

  itemIsPresent(){
    this.itemName = this.item.itemName;
    this.codename = this.item.codename;
    this.price = this.item.price;
    this.moq = this.item.moq;

    this.default_image = 1;
  }

  goHome(){
    this.router.navigateByUrl('');
  }

}