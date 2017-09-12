import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamadaInicialComponent } from './camadas/camada-inicial/camada-inicial/camada-inicial.component';
import { PaginaNaoEncontradaComponent } from './compartilhado/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
    {
        path: '',
        component: CamadaInicialComponent
    },
    {
        path: '**',
        component: PaginaNaoEncontradaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }