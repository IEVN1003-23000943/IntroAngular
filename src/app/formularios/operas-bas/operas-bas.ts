import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  styleUrl: './operas-bas.css',
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1:string = ''
  num2:string = ''
  resultado:number= 0
  operacionSeleccionada: string = '';

  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }
  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2)
  }
  multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2)
  }
  division():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2)
  }

  ejecutarOperacion() {
    switch (this.operacionSeleccionada) {
      case 'sumar':
        this.sumar();
        break;
      case 'restar':
        this.restar();
        break;
      case 'multiplicar':
        this.multiplicar();
        break;
      case 'dividir':
        this.division();
        break;
      default:
        console.log('Por favor, selecciona una operación');
        break;
    }
  }
}
