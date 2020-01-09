import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
  
    alert("You clicked me, prepare to die");
  }
  clickEvent1(){
    alert("You double clicked me, prepare to fight");
  }
}
