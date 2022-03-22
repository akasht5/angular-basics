import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../User'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = "Users";
  
  users: User[] = [];

  constructor(private service: UsersService) { }
  
  ngOnInit(): void {
    this.users = this.service.getUsers();
    console.log(this.users);
  }

  onDeleteUser(username: any){
    this.service.deleteUser(username);
  }
}
