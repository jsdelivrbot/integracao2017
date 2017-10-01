import { comparaHoras } from './../shared/pesquisa-compara-horas';
import { comparaPublicacoes } from './../shared/pesquisa-compara-publicacoes';
import { grupos } from './../shared/pesquisa-grupos';
import { projetos } from './../shared/pesquisa-projetos';
import { Component, OnInit } from '@angular/core';

import { single, multi } from './../shared/teste-paises';
import { horas } from './../shared/curso-horas';

@Component({
  selector: 'ufg-es-camada-medial',
  templateUrl: './camada-medial.component.html',
  styleUrls: ['./camada-medial.component.scss']
})
export class CamadaMedialComponent implements OnInit {

  single: any[];
  multi: any[];

  horas: any[];
  projetos: any [];
  grupos: any[];
  comparaPublicacoes: any[];
  comparaHoras: any[];

  view: any[] = [700, 400];

  viewer: any[] = [1400, 800];
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Anos';
  showYAxisLabel = true;
  yAxisLabel = 'Horas Trabalhadas';

  XAxisLabel = 'Atividades';
  YAxisLabel = 'Quantidade';


  xLabel: 'Anos';
  yLabel: 'Publicações';

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    window.scrollTo(0, 0);
    Object.assign(this, {single, multi});
    this.horas = horas;
    this.projetos = projetos;
    this.grupos = grupos;
    this.comparaPublicacoes = comparaPublicacoes;
    this.comparaHoras = comparaHoras;
  }

  ngOnInit() {


  }

  onSelect(event) {
    console.log(event);
  }

}