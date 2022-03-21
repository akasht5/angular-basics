import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: any = null
  user: any = null
  sub2:any;

  constructor(private route: ActivatedRoute, 
            private userService: UsersService,
            private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sub2 = this.userService.getUser(this.id).subscribe(data => {
      this.user = data;
    });
  }

  ngOnDestroy(){
    this.sub2.unsubscribe();
  }
}
