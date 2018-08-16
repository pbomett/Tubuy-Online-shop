import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue.model';
import { DataService } from '../data-service/data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues(){
    this.dataService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested...');
      console.log(this.issues);
    });
  }

  editIssue(id){
    //console.log(id);
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id){
    this.dataService.deleteIssue(id).subscribe(() =>{
      this.fetchIssues();
    });
  }

}
