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

  users: any = null;
  sub: any;

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.sub = this.service.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  openDialog(){
    console.log("Pop up opened !");
  }

  deleteUser(name: string){
    let newUsers = this.users.filter((user: { username: string; }) => user.username !== name);
    this.users = newUsers;
  }

  addUser(user: User){
    const newUsers = this.users.push(user);
    this.users = newUsers;
  }
}
