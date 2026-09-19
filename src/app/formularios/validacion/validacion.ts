import { Component } from '@angular/core';

@Component({
  selector: 'app-validacion',
  standalone: false,
  styleUrl: './validacion.css',
  templateUrl: './validacion.html',
})
export class Validacion {
usuario:string = '';
contrasena:string = '';
respuesta:string = '';
credusu:string = 'Lion14123'
credcontra:string = '123456789'

ingresar():void{
  if (this.usuario == this.credusu && this.contrasena == this.credcontra) {
    this.respuesta = 'Bienvenido al sistema ' + this.usuario
  } else if (this.usuario == this.credusu && this.contrasena != this.credcontra) {
    this.respuesta = 'La contraseña no es valida.'
  } else if (this.usuario != this.credusu){
    this.respuesta = 'El nombre de usuario no es valido.'
  }else{
    this.respuesta = 'Credenciales no validas'
  }
}
}
