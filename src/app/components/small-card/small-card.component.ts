import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','./small-card.component-response.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  PhotoCover:string=""

  @Input()
  CardTitle:string=""

  @Input()
  CardDescription:string=""

  @Input()
  CardDate:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
