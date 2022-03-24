import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuestraComponent } from './muestra/muestra.component';



@NgModule({
  declarations: [
    MuestraComponent
  ],
  exports:[
    MuestraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
