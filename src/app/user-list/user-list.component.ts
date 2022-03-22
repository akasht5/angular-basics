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
  public aakash1:any
  public aakash2:any
  public aakash3:any
  public aakash4:any
  public aakash5:any
  public aakash6:any

  name: any;
  email: any;
  username: any;
  phone: any;
  address: any;
  company: any;

  users: any = null;
  
  user = {
    name:"",
    email:"",
    username: "",
    phone:"",
    address: "",
    company: ""
  };

  sub: any;

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }
  
  onSubmit(user: User){
    
  }

  deleteUser(name: string){
    let newUsers = this.users.filter((user: { username: string; }) => user.username !== name);
    this.users = newUsers;
  }

  editUser(user:any)
  {
    this.aakash1=user.name;
    this.aakash2=user.email;
    this.aakash3=user.username;
    this.aakash4=user.phone;
    this.aakash5=user.address;
    this.aakash6=user.company;
  } 

  onEdit(user: any){
    console.log(user);

    let oldUser = this.users.find((u: { name: string }) => u.name == user.name);
    
    this.users[oldUser] = user;
  }

  newUser(){
    this.user = {
      name:"",
      email:"",
      username: "",
      phone: "",
      address: "",
      company: ""
    }
  }
}
