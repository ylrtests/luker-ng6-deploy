import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-planeacion-estructura',
  templateUrl: './planeacion-estructura.component.html',
  styleUrls: ['./planeacion-estructura.scss']
})
export class PlaneacionEstructuraComponent implements OnInit {
  // Elementos de la caja de herramientas del proceso.
  public elementsCajaHerramientas = {
    first: [ // Elementos de la primera columna
      {
        subtitle: '',
        items: [
          { title: 'Mapa de procesos', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Organigrama organizacional', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }
        ]
      }
    ],
    second: [ // Elementos de la segunda columna
      {
        subtitle: '',
        items: [
          { title: 'Guía estructuración de áreas', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ]
      }
    ]
  };

  // Elementos para el modal de Rol de área
  public elementsRolDeArea = {
    first: [
      {
        subtitle: '',
        items: [
          { title: 'Compañía', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Marcas', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Marcas de canal', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Aseo', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'CABAS', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Logística', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Talento & Gestión', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }
        ]
      }
    ],
  };

  constructor() { }

  ngOnInit() {
  }

}
