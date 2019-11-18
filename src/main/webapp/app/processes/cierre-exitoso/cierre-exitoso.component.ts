import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-cierre-exitoso',
  templateUrl: './cierre-exitoso.component.html',
  styleUrls: ['./cierre-exitoso.scss']
})
export class CierreExitosoComponent implements OnInit {
  // Elementos de la caja de herramientas del proceso.
  public elementsCajaHerramientas = {
    first: [ // Elementos de la primera columna
      {
        subtitle: '',
        items: [
          { title: 'Formato de entrevista de retiro', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Procedimiento de desvinculación', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Acuerdo de expectativas', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ]
      }
    ],
    second: [ // Elementos de la segunda columna
      {
        subtitle: '',
        items: [
          { title: 'Política de procesos disciplinarios', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
