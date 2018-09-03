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

  getItemByName(name){
    console.log(`${this.uri}/items/search/${name}`);
    return this.http.get(`${this.uri}/items/search/${name}`);
  }


  // getIssues(){
  //   return this.http.get(`${this.uri}/issues`);
  // }

  // getIssueById(id){
  //   return this.http.get(`${this.uri}/issues/${id}`);
  // }

  addItem(name, codename, price, moq){
    const issue = {
      name: name,
      codename: codename,
      description: price,
      severity: moq
    }
    return(this.http.post(`${this.uri}/items/add`, issue));
  }

  updateItem(id, name, codename, price, moq){
    const item = {
      name: name,
      codename: codename,
      description: price,
      severity: moq
    }
    return(this.http.post(`${this.uri}/items/update/${id}`, item));
  }

  deleteItem(id){
    
    return(this.http.get(`${this.uri}/items/delete/${id}`));
  }

  signup(username, email, password, phone){
    const userdata = {
      username: username,
      email: email,
      password: password,
      phone: phone
    }

    return(this.http.post(`${this.uri}/signup`, userdata));
  }

  signin(username, password){
    const userdata = {
      username: username,
      password: password
    }

    console.log(userdata);

    return(this.http.post(`${this.uri}/signin`, userdata));
  }
  
}
