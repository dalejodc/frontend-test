import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sticky: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    let navbar = document.getElementById("navbar");

    let sticky = navbar.offsetTop;
    navbar.classList.add("sticky");
  }

}
