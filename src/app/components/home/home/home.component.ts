import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        this.active();
    }

    // ngOnDestroy(): void {
    //   var element = document.getElementById("home");
    //   element.classList.remove("active");
    // }

    active() {
        if (this.router.url === '/') {
            var element = document.getElementById("home");
            element.classList.add("active");
        }
    }
}
