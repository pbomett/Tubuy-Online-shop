import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { ItemModel } from '../item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  
  item: ItemModel;
  id: String;
  default_image: number;
  itemName; codename; price; moq;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
  
    })
    this.dataService.getItemById(this.id).subscribe((data: ItemModel) => {
      this.item = data;

      this.itemName = this.item.itemName;
      this.codename = this.item.codename;
      this.price = this.item.price;
      this.moq = this.item.moq;

      this.default_image = 1;
    });
  }

ImageExist(url) 
{
  
   var img = new Image();
   img.src = `/assets/${this.codename}/${url}.jpg`;
   return img.height != 0;
}

switchImg(index){
  this.default_image=index;
}

}
