import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css','./big-card.component-response.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  PhotoCover:string = ""
  @Input()
  CardTitle:string = ""
  @Input()
  CardDescription = ""

  constructor() { }

  ngOnInit(): void {
  }

}
