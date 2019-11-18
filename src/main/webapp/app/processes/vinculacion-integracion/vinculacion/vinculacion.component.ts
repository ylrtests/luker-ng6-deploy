import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-vinculacion',
  templateUrl: './vinculacion.component.html',
  styleUrls: ['./vinculacion.component.scss']
})
export class VinculacionComponent implements OnInit {
  elementsModal = {
    first: [ // Elementos de la primera columna
      {
        subtitle: '',
        items: [
          { title: 'Procedimiento convocatoria interna', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Guía entrevista por competencias', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Formato de entrevista', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Convocatorias internas', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Concepto selección paso temporal a fijo', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Concepto convocatoria interna', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ]
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
