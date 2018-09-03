import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.scss']
})
export class CreateItemComponent implements OnInit {

  createForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router) { 
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      codename: '',
      price: '',
      moq: ''
    });
  }

  addItem(name, codename, price, moq) {
    this.dataService.addItem(name, codename, price, moq).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
