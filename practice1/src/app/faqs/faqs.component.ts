import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  flip = false;

  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
  
    alert("You clicked me, prepare to die");
  }
  clickEvent1(){
    alert("You double clicked me, prepare to fight");
  }

  switch (v) {
    //this.flip=!this.flip;
    //this.flip=this.flip ? !this.flip : !this.flip;
    //v.innerText = this.flip  ? "Off" : "On";
    if(this.flip)
    {
      this.flip=false;
      v.innerText="On"
    } else
    {
      
      v.innerText="Off"
    this.flip=true;

    
    }
  }
}
