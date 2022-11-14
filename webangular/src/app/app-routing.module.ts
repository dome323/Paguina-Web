import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from 'src/modulo1/componente1/componente1.component';
import { Componente2Component } from 'src/modulo2/componente2/componente2.component';


const routes: Routes = [
  {
    path: '', component: Componente1Component
  },

  {
    path: '', component: Componente2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
