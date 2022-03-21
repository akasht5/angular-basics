import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = "Contact"

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    alert("Form Submitted !")
  }
}
