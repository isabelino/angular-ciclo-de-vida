import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent implements OnInit,OnChanges {


  @Input() nombre!:string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Se ha cambiado desde Muestra:  ',this.nombre);
  }

  ngOnInit(): void {

  }

}
