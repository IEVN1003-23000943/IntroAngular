import { Component } from '@angular/core';
import { IHeroe } from '../heroe';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

  imageWidth: number = 40;
  imageMargin: number = 2;
  muestraImagen: boolean = true;
  listfilter: string = '';

  showImage():void{
    this.muestraImagen=!this.muestraImagen;
  }

  heroes:IHeroe[]=[
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccolo",
      description: "Makankosapo",
      race: "Namekiano",
      ki: 7000
    },
    {
      imagen: "https://dragonball-api.com/characters/Freezer.webp",
      nombre: "Frezzer",
      description: "Death Ball",
      race: "Demon frice",
      ki: 1000000
    },
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      description: "Kamehameha",
      race: "Sayayin",
      ki: 1200000
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      description: "Resplandor final",
      race: "Sayayin",
      ki: 800000
    },
    {
      imagen: "https://dragonball-api.com/characters/gohan.webp",
      nombre: "Gohan",
      description: "kamehameha",
      race: "Human-Sayan",
      ki: 1500000
    },
  ]
}
