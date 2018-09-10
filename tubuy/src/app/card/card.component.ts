import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../item.model';
import { DataService } from '../data-service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  items: ItemModel[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems(){
    this.dataService.getItems().subscribe((data: ItemModel[]) => {
      this.items = data;
      // console.log('Data requested...');
      // console.log(this.items);
    });
  }

  viewItem(itemId: String){
    //console.log(`/items/${itemId}`);
    this.router.navigateByUrl(`/item/${itemId}`);
  }

}
