import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../User'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.usersUrl);
  }
    
  getUser(id: string){
    return this.http.get(this.usersUrl + "/" + id);
  }

  addUser(user: User){
    return this.http.post(this.usersUrl + '/posts/', JSON.stringify(user), this.httpOptions)
  }

  updateUser(){

  }

  delete(username: string){
    return this.http.delete(this.usersUrl + '/posts/' + username, this.httpOptions);
  }

}
