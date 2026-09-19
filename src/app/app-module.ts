import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperasBas } from './formularios/operas-bas/operas-bas';
import { Distancia } from './formularios/distancia/distancia';
import { Figuras } from './formularios/figuras/figuras';
import { Palindromo } from './formularios/palindromo/palindromo';
import { Validacion } from './formularios/validacion/validacion';
import { Triangulo } from './formularios/triangulo/triangulo';

@NgModule({
  declarations: [
    App,
    HeroesList,
    HeroesFilterPipe,
    OperasBas,
    Distancia,
    Figuras,
    Palindromo,
    Validacion,
    Triangulo,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
