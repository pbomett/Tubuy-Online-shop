import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../item.model';
import { DataService } from '../data-service/data.service';
import { fallIn } from '../router.animations';

@Component({
  selector: 'app-cardholder',
  templateUrl: './cardholder.component.html',
  styleUrls: ['./cardholder.component.scss'],
  //animations: [ fallIn ]
})


export class CardholderComponent implements OnInit {

  items: ItemModel[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems(){
    this.dataService.getItems().subscribe((data: ItemModel[]) => {
      this.items = data;
      // console