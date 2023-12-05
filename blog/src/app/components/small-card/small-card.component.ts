import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{
  /*
    * criação dos parametros para chamada dinamica
  */
  @Input()
  photoCover_small_card:string = ""
  @Input()
  cardTitle_small_card:string = ""

  constructor(){

  }

  ngOnInit(): void {

  }

}
