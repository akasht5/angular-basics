import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any = [
    {
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": "Kulas Light, Apt. 556, Gwenborough",
      "phone": "1-770-736-8031 x56442",
      "company": "Romaguera-Crona"
    },
    {
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": "Victor Plains, Suite 87, Wisokyburgh",
      "phone": "2-770-736-8031",
      "company": "Deckow-Crist",
    },
    {
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": "Douglas Extension, Suite 847, McKenziehaven",
      "phone": "3-770-736-8031",
      "company": "Romaguera-Jacobson",
    },
    {
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": "Hoeger Mall, Apt. 692, South Elvis",
      "phone": "4-770-736-8031",
      "company": "Robel-Corkery"
    },
    {
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": "Skiles Walks, Suite 351, Roscoeview",
      "phone": "5-770-736-8031",
      "company": "Keebler LLC"
    }
  ];

  constructor() { }

  getUsers(){
    return this.users;
  }
  
  addUser(user: any){
    return this.users.unshift(user);
  }

  getUser(id: any){
    return this.users.find((user: { username: any; }) => user.username == id);
  }

  deleteUser(username: any){
    let user = this.users.find((u: { username: any; }) => u.username == username);
    let index = this.users.indexOf(user, 0);
    this.users.splice(index, 1);
  }

  updateUser(user: any){
    let oldUser = this.users.find((u: { username: any; }) => u.username == user.username);

    oldUser.name = user.name;
    oldUser.username = user.username;
    oldUser.email = user.email;
    oldUser.address = user.address;
    oldUser.phone = user.phone;
    oldUser.company = user.company;
    console.log(user, oldUser);
  }
}
