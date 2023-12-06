import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { dataFake } from '../../data/dataTmp';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  photoCover:string = "";
  contentTitle:string = "";
  content_descripion:string = "";
  private id:string | null = "0";



  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>this.id = value.get("id") )
      this.setValueToComponent(this.id)
  }
  setValueToComponent(id:string | null){
    const result = dataFake.filter(articles => articles.id == id)[0]

    this.contentTitle = result.title
    this.content_descripion = result.desciption
    this.photoCover = result.photoCover

  }
}
