import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  standalone: false,
  styleUrl: './triangulo.css',
  templateUrl: './triangulo.html',
})
export class Triangulo {
  x1:string = ''
  x2:string = ''
  x3:string = ''
  y1:string = ''
  y2:string = ''
  y3:string = ''
  Area:number = 0
  resultado:string = '';

  analizar():void{
    this.Area = (Math.abs((parseFloat(this.x1)*(parseFloat(this.y2)-parseFloat(this.y3))) + (parseFloat(this.x2)*(parseFloat(this.y3)-parseFloat(this.y1))) + (parseFloat(this.x3)*(parseFloat(this.y1)-parseFloat(this.y2))))) / 2

    if (this.Area > 0) {
      this.resultado = 'si se puede hacer un triangulo'
    } else if (this.Area == 0) {
      this.resultado = 'No se forma un triangulo'
    }

  }
}
