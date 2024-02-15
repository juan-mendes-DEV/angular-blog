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
  CardDate:string = ""

  @Input()
  CardDescription:string = ""

  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
