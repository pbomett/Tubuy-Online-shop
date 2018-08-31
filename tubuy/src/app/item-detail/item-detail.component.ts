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
  img1; img2; img3; img4; img5;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  default_image=1;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.dataService.getItemById(this.id).subscribe((data: ItemModel) => {
      this.item = data;
      
      this.img1= this.ImageExist(1);
      this.img2= this.ImageExist(2);
      this.img3= this.ImageExist(3);
      this.img4= this.ImageExist(4);
      this.img5= this.ImageExist(5);
      
      //console.log(this.img2);

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
