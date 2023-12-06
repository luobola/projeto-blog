import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
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
  @Input()
  Id:string = "0"

  constructor(){

  }

  ngOnInit(): void {

  }

}
