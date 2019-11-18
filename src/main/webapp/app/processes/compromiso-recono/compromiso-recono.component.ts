import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-compromiso-recono',
  templateUrl: './compromiso-recono.component.html',
  styleUrls: ['./compromiso-recono.scss']
})
export class CompromisoReconoComponent implements OnInit {

  elementsCajaHerramientas = {
    first: [ // Elementos de la primera columna
      {
        subtitle: ' ',
        items: [
          { title: 'Mis beneficios', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ]
      },
      {
        subtitle: 'Programa de\nreconocimiento',
        items: [
          { title: 'Resultados de negocio', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Oficinas de valor', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Figuras del mes', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
