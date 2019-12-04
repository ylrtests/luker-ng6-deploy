import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-compromiso-recono',
  templateUrl: './compromiso-recono.component.html',
  styleUrls: ['./compromiso-recono.scss']
})
export class CompromisoReconoComponent implements OnInit {
  // Elementos de la caja de herramientas del proceso.
  public elementsCajaHerramientas = {
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
      },
      {
        subtitle: '',
        items: [
          { title: 'Matriz de motivadores de colaboradores', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Herramienta de niveles de compromiso', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Iceberg de compromiso de colaboradores', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Protocolo para gestionar mis emociones', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Protocolo para gestionar las emociones de otros', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          { title: 'Tips para gestionar las emociones de tu equipo', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
