import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css','./menu-bar.component-response.css']
})
export class MenuBarComponent implements OnInit {

  @Input()
  Logo:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
