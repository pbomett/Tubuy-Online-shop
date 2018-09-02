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


  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  default_image=1;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.dataService.getItemById(this.id).subscribe((data: ItemModel) => {
      this.item = data;

    });
  }

ImageExist(url) 
{
  
   var img = new Image();
   img.src = `../../assets/${this.item.codename}/${url}.jpg`;;
   return img.height != 0;
}

switchImg(index){
  this.default_image=index;
}

}
