import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})

export class NewsletterComponent implements OnInit {

  message:boolean=false;

  user: Object={
		name: null,
		username: null,
		email:null,
		country: ""
	}

  constructor() { }

  ngOnInit() {
  }

  send(){
    this.message = true;
    this.user = '';
  }

}
