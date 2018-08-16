import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { DataService } from '../data-service/data.service';
import { Issue } from '../issue.model';

@Component({
  selector: 'app-editissue',
  templateUrl: './editissue.component.html',
  styleUrls: ['./editissue.component.scss']
})
export class EditissueComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        console.log(params.id);
        this.id = params.id;
      this.dataService.getIssueById(this.id).subscribe(res => {
        this.issue = res;
        this.updateForm.get('title').setValue(this.issue.title);
        this.updateForm.get('responsible').setValue(this.issue.responsible);
        this.updateForm.get('description').setValue(this.issue.description);
        this.updateForm.get('severity').setValue(this.issue.severity);
        this.updateForm.get('status').setValue(this.issue.status);
      });
    })
  }

  createForm(){
    this.updateForm = this.fb.group({
      title: ['', Validators.required ],
      responsible: '',
      description: '',
      severity: '',
      status: ''
    });
  }

  updateIssue(title, responsible, description, severity, status) {
    this.dataService.updateIssue(this.id, title, responsible, description, severity, status).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }

}
