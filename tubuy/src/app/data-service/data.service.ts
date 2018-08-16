import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemModel } from '../item.model';
import { ITEMS } from '../mock-items';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get(`${this.uri}/items`);
  }

  getItemById(id){
    return this.http.get(`${this.uri}/items/${id}`);
  }


  getIssues(){
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id){
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title, responsible, description, severity){
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    }
    return(this.http.post(`${this.uri}/issues/add`, issue));
  }

  updateIssue(id, title, responsible, description, severity, status){
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    }
    return(this.http.post(`${this.uri}/issues/update/${id}`, issue));
  }

  deleteIssue(id){
    
    return(this.http.get(`${this.uri}/issues/delete/${id}`));
  }

  signup(value){


    return(this.http.post(`${this.uri}/signup`, value));
  }

  signin(values){
    return(this.http.post(`${this.uri}/signup`, values));
  }
  
}
