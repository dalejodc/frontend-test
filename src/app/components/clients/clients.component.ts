import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

   constructor() {}

  show: boolean = true;
  public innerWidth: any;

  ngOnInit() {
    this.checkSize();
  }

  checkSize(){
    this.innerWidth = window.innerWidth;
    if(this.innerWidth <=766){
      this.show = false;
      // console.log(this.show);
    }else{
      this.show = true;
      // console.log(this.show);
     }
  }

  //Event to listen the windows size and don't display elements in the DOM
  @HostListener('window:resize', ['$event']) onResize(event){

     //To hide an element
     if(event.target.innerWidth <=766){
      this.show = false;
      // console.log(this.show);
    }else{
      this.show = true;
      // console.log(this.show);
     }

  }
}
