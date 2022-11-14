import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';



@NgModule({
  declarations: [Componente3Component, Componente4Component],
  imports: [
    CommonModule
  ]
})
export class Modulo4Module { }
