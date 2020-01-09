import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trash: Student[] = [
    {
      fName:'Jon',lName:'Stewart',sName:'JohnStewart',pNumber:4444444
    },
    {
      fName:'Lourn',lName:'Selga',sName:'Louuurrrnnn',pNumber:3333333
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
