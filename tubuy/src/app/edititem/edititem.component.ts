import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { DataService } from '../data-service/data.service';
import { ItemModel } from '../item.model';

@Component({
  selector: 'app-editissue',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.scss']
})
export class EditItemComponent implements OnInit {

  id: String;
  item: any = {};
  updateForm: FormGroup;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        console.log(params.id);
        this.id = params.id;
      this.dataService.getItemById(this.id).subscribe(res => {
        this.item = res;
        this.updateForm.get('name').setValue(this.item.itemName);
        this.updateForm.get('codename').setValue(this.item.codename);
        this.updateForm.get('price').setValue(this.item.price);
        this.updateForm.get('moq').setValue(this.item.moq);
      });
    })
  }

  createForm(){
    this.updateForm = this.fb.group({
      name: ['', Validators.required ],
      codename: '',
      price: '',
      moq: ''
    });
  }

  updateItem(name, codename, price, moq) {
    this.dataService.updateItem(this.id, name, codename, price, moq).subscribe(() => {
      this.snackBar.open('Item updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }

}
