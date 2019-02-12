import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css']
})

export class NewsletterComponent implements OnInit {

    message: boolean = false;
    error: boolean = false;

    user: Object = {
        name: null,
        username: null,
        email: null,
        country: ""
    }

    constructor() { }

    ngOnInit() {
    }

    send() {
        
        console.log(this.user);
        console.log(this.user.name);
        // this.message = true;
        this.user.name = '';
    }

}
