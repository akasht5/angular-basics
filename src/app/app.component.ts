import { Component } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-app';

  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  users:any = null;

  constructor(private http: HttpClient){
    console.log("Getting users data ...");
    this.getUsers();
  }
    
  getData(){
    return this.http.get(this.apiUrl);
  }

  getUsers(){
    this.getData().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }
}
