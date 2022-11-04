import { Injectable } from '@angular/core';
import { user } from './user.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AllService {

  baseUrluser = 'http://localhost:3000/user'

  constructor(private http: HttpClient) { }

  postUser(User: user): Observable<user> {
    return this.http.post<user>(this.baseUrluser, User)
  }
  getUser(): Observable<user[]> {
    return this.http.get<user[]>(this.baseUrluser)
  }
}
