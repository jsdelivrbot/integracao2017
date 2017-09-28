import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamadaFinalComponent } from './camada-final/camada-final.component';
import { TopicoComponent } from './topico/topico.component';

const routes: Routes = [
  {
    path: 'es/detalhe',
    component: CamadaFinalComponent,
    children: [
      {
        path: 'topico/:id',
        component: TopicoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamadaFinalRoutingModule { }
