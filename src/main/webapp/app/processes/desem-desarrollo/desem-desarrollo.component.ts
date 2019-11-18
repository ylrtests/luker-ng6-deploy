import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-desem-desarrollo',
  templateUrl: './desem-desarrollo.component.html',
  styleUrls: ['./desem-desarrollo.scss']
})
export class DesemDesarrolloComponent implements OnInit {
// Elementos de la caja de herramientas del proceso.
public elementsCajaHerramientas = {
    first: [ // Elementos de la primera columna
      {
        subtitle: '',
        items: [
          { title: 'Competencias organizacionales', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Seguimiento de objetivos individuales', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Formato evalución desempeño', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Planes Carrera', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ]
      }
    ],
    second: [ // Elementos de la segunda columna
      {
        subtitle: 'Plan de\ncapacitación',
        items: [
          { title: 'Planta aseo', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Planta Café', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Comercial', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Logística', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Administrativo', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
