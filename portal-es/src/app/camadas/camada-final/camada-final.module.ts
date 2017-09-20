import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamadaFinalComponent } from './camada-final/camada-final.component';
import { CamadaFinalRoutingModule } from './camada-final-routing.module';
import { CamadaFinalService } from './shared/camada-final.service';
import { TopicoComponent } from './topico/topico.component';
import { LadoEsquerdoComponent } from './menu-lateral/lado-esquerdo/lado-esquerdo.component';
import { LadoDireitoComponent } from './menu-lateral/lado-direito/lado-direito.component';

@NgModule({
  declarations: [
    CamadaFinalComponent,
    TopicoComponent,
    LadoEsquerdoComponent,
    LadoDireitoComponent
  ],
  imports: [
    CommonModule,
    CamadaFinalRoutingModule
  ],
  exports: [CamadaFinalComponent],
  providers: [CamadaFinalService]
})
export class CamadaFinalModule { }
