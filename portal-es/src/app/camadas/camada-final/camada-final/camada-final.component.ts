import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CamadaFinalService } from './../shared/camada-final.service';

@Component({
  selector: 'ufg-es-camada-final',
  templateUrl: './camada-final.component.html',
  styleUrls: ['./camada-final.component.scss']
})
export class CamadaFinalComponent implements OnInit {
  listaPPC: any;

  collection: Array<any>;
  text: string;

  constructor(private finalService: CamadaFinalService, private router: Router) {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    // this.getPPC();
  }

  getPPC() {
    // this.finalService.getPPC().subscribe(
    //   data => {
    //     this.listaPPC = data.ppc;
    //     console.log(data);
    // });
  }

}
