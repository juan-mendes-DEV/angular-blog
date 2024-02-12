import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medio-card',
  templateUrl: './medio-card.component.html',
  styleUrls: ['./medio-card.component.css','./medio-card.component-response.css']
})
export class MedioCardComponent implements OnInit {
  @Input()
  PhotoCover:string=""

  @Input()
  CardTitle:string=""

  @Input()
  CardDate:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
