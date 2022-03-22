import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: any;
  header: any;

  user: any = {
    name: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    company: '' 
  }

  constructor(private route: ActivatedRoute, private service: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.header = this.id == 0 ? "Add User" : "Edit User";

    if(this.id != 0){
      this.user = this.service.getUser(this.id);
    }
  }

  onSubmit(user: NgForm): void{
    if(this.id == 0){
      console.log(user.value);
      this.service.addUser(user.value);
    }else{
      this.service.updateUser(user.value);
    }

    this.router.navigateByUrl("users");
  }

}
