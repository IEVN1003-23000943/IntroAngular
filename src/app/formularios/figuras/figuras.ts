import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {
  bas: string = '';
  alt: string = '';
  area: number = 0;
  figuraSelec: string = '';

  cuadrado(): void {
    this.area = parseFloat(this.bas) * parseFloat(this.alt);
  }
  rectangulo(): void {
    this.area = parseFloat(this.bas) * parseFloat(this.alt);
  }
  triangulo(): void {
    this.area = (parseFloat(this.bas) * parseFloat(this.alt)) / 2;
  }
  penta(): void {
    this.area = (parseFloat(this.alt) * (parseFloat(this.bas) * 5)) / 2;
  }
  circulo(): void {
    this.area = 3.1416 * Math.pow(parseFloat(this.alt), 2);
  }

  ejecutarOperacion() {
    switch (this.figuraSelec) {
      case 'cuad':
        this.cuadrado();
        break;
      case 'rec':
        this.rectangulo();
        break;
      case 'tri':
        this.triangulo();
        break;
      case 'pen':
        this.penta();
        break;
      case 'cir':
        this.circulo();
        break;
      default:
        console.log('Por favor, selecciona una figura');
        break;
    }
  }
}
