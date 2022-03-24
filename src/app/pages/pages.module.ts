import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from './pagina1/pagina1.component';
import { FormsModule } from '@angular/forms';
import { MuestraComponent } from '../componentes/muestra/muestra.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    Pagina1Component
  ],
  exports:[
    Pagina1Component
  ],

  imports: [
    CommonModule,
    FormsModule,
    ComponentesModule
  ]
})
export class PagesModule { }
