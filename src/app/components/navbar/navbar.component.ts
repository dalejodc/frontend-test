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
  //   // When the user scrolls the page, execute myFunction
  //   window.onscroll = function () { myFunction() };

  // // Get the navbar
  // var navbar = document.getElementById("navbar");

  // // Get the offset position of the navbar
  // var sticky = navbar.offsetTop;

  // // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function myFunction() {
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // } 

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    let navbar = document.getElementById("navbar");
  
  let sticky = navbar.offsetTop;
    navbar.classList.add("sticky");
  }

}
