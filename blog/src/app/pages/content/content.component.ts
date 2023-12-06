import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  photoCover:string = "https://goat.com.au/wp-content/uploads/2019/10/tony-stark-snap-avengers-endgame.jpg";
  contentTitle:string = "MINHA NOTICIA";
  content_descripion:string = "Ola Mundo loko!";



  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
        console.log(value.get("id"))
      )
  }

}
