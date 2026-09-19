import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {
  frace:string = '';
  f:string = '';
  cons:number = 0;
  voca:number = 0;
  palin:string = '';
  vocales:string = '';
  consonantes:string = '';

  Leercad():void{
    this.voca = 0;
    this.cons = 0;
    this.vocales = '';
    this.consonantes = '';
    this.f = '';

    let i:number = 0;

    while (this.frace[i]) {
      let c:string = this.frace[i]

      if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        this.voca++;
        this.vocales += c;
        this.f += c
      }
      else if (c == ' ') {
        // nada
      }
      else {
        this.cons++;
        this.consonantes += c;
        this.f += c
      }
      i++;
    }

    let k:number = 0;
    while(this.f[k]) { k++; }
    let j:number = 0;
    let fin:number = k-1;
    let palindromo:boolean = true;

    while (j < fin) {
      if (this.f[j] != this.f[fin]) {
        palindromo = false;
        break;
      }
      fin--
      j++
    }
    if (palindromo) {
      this.palin = "si es un palindromo.";
    } else {
      this.palin = "no es un palindromo.";
    }
  }
}
