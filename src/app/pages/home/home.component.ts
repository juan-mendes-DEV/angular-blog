import { Component, OnInit } from '@angular/core';
const AOS = require('aos');


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component-response.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
