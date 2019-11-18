import { Component, OnInit, Input, TemplateRef, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'jhi-tpl-definiciones',
  templateUrl: './tpl-definiciones.component.html',
  styleUrls: ['./tpl-definiciones.component.scss']
})
export class TplDefinicionesComponent implements OnInit {

  @Input() processNumber: number;
  @Input() processTitle?: string;
  @Input() listPrincipiosTemplate?: TemplateRef<any>;
  @Input() listProcesosTemplate?: TemplateRef<any>;
  @Input() listElementosTemplate?: TemplateRef<any>;

  public processClasses: any;

  constructor(private elem: ElementRef, private location: Location) { }

  ngOnInit() {
    // En el objeto processClasses, asigna las clases que usará,
    // de acuerdo al proceso del mapa de gestión en el que se encuentre
    switch (this.processNumber) {
      case 1:
        this.processClasses = {
          'bg': 'bg-1',
          'color': 'color-1',
          'icon': 'first'
        };
        break;
      case 2:
        this.processClasses = {
          'bg': 'bg-2',
          'color': 'color-2',
          'icon': 'second'
        };
        break;
      case 3:
        this.processClasses = {
          'bg': 'bg-3',
          'color': 'color-3',
          'icon': 'third'
        };
        break;
      case 4:
        this.processClasses = {
          'bg': 'bg-4',
          'color': 'color-4',
          'icon': 'fourth'
        };
        break;
      case 5:
        this.processClasses = {
          'bg': 'bg-5',
          'color': 'color-5',
          'icon': 'fifth'
        };
        break;
      case 6:
        this.processClasses = {
          'bg': 'bg-6',
          'color': 'color-6',
          'icon': 'sixth'
        };
        break;
      default:
        this.processClasses = {
          'bg': 'bg-1',
          'color': 'color-1',
          'icon': 'first'
        };
    }
  }

  // Método que se usa para volver a la página anterior
  goBack() {
    this.location.back();
  }

}
