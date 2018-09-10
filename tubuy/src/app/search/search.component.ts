import { Component, OnInit, OnChanges } from '@angular/core';
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

  items: ItemModel[];
  allNames: string[] = [];
  searchTerm: string;
  default_image: number;
  searches: ItemModel[]=[];
  filteredNames: string[];
  itemName; price; codename; moq;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchTerm = params['name'];
      //console.log(this.searchTerm);
  
    })
    this.dataService.getItems().subscribe((data: ItemModel[]) => {
      this.items = data;

      //get all names
      this.getNames();

      //if searchterm is not blank, do the search
      if(this.searchTerm!==''){
        this.doSearch(this.allNames, this.searchTerm);
      }
      
      //if the result are not empty, convert the returned(filtered) names to objects 
      if(this.filteredNames!==[]){
        this.resultsToObjects(this.filteredNames, this.items);
      }
      
      
      // if (this.searches){
      //   //this.itemIsPresent();
      // }

    });
  }

  //fetch only names of all items 
  getNames(): string[]{
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index].itemName;
      this.allNames.push(element);
    }
    //console.log(this.allNames);
    return this.allNames;
  }

//get array of search results in name format
  doSearch(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLocaleLowerCase();

    this.filteredNames = items.filter(it => {
    return it.toLocaleLowerCase().includes(searchText);
});

return this.filteredNames;
}

//convert search results to object format for displaying
  resultsToObjects(names:any[], items: ItemModel[]){
    for (let a = 0; a < names.length; a++) {
      for (let x = 0; x < items.length; x++) {
                
        if(names[a]==items[x].itemName){
          this.searches.push(items[x]);
        }
      }
      
    }
    console.log(this.searches);
    return this.searches;
  }


  

  viewItem(itemId: String){
    //console.log(`/items/${itemId}`);
    this.router.navigateByUrl(`/item/${itemId}`);
  }

  // itemIsPresent(){
  //   this.itemName = this.item.itemName;
  //   this.codename = this.item.codename;
  //   this.price = this.item.price;
  //   this.moq = this.item.moq;

  //   this.default_image = 1;
  // }

  goHome(){
    this.router.navigateByUrl('');
  }

}