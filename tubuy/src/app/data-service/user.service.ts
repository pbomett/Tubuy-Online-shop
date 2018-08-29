import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserDetails } from '../authenitcation-service/authentication.service';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<UserDetails[]>(`http://localhost:4000/users`);
    }
}