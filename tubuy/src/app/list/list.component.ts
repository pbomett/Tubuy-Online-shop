import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../item.model';
import { DataService } from '../data-service/data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: ItemModel[];
  displayedColumns = ['name', 'codename', 'price', 'moq', 'actions'];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems(){
    this.dataService.getItems().subscribe((data: ItemModel[]) => {
      this.items = data;
      console.log('Data requested...');
      console.log(this.items);
    });
  }

  editItem(id){
    //console.log(id);
    this.router.navigate([`/edit/${id}`]);
  }

  deleteItem(id){
    this.dataService.deleteItem(id).subscribe(() =>{
      this.fetchItems();
    });
  }

}
