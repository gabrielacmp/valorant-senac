import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  /* imagemHome = "https://cdn.pixabay.com/photo/2014/08/23/19/50/photography-425687_960_720.jpg"; */
  imagemHome = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
