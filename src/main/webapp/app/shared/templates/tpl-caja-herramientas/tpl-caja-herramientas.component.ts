import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'jhi-tpl-caja-herramientas',
  templateUrl: './tpl-caja-herramientas.component.html',
  styleUrls: ['./tpl-caja-herramientas.scss']
})
export class TplCajaHerramientasComponent implements OnInit {

  @ViewChild('modalTools') modalCajaHerramientas: TemplateRef<any>;
  @Input() elementsCajaHerramientas;
  @Input() processNumber = 0;
  @Input() titleFirstColumn = 'Placeholder';
  @Input() titleSecondColumn = 'Placeholder';
  @Input() titleProcess = '';
  @Input() titleModal ? = 'Caja de herramientas';
  @Input() positionTitleProcess = 'center'; // Center - right - left
  @Input() hideToolBoxIcon ? = false;
  private modalReference: any;
  public processClasses: any;

  constructor(private modalService: NgbModal, private location: PlatformLocation) {
  }

  ngOnInit() {
    // En el objeto processClasses, asigna las clases que usará,
    // de acuerdo al proceso del mapa de gestión en el que se encuentre
    // indicado a través de la variable processNumber
    switch (this.processNumber) {
      // Colores por defecto Caso 0
      case 0:
        this.processClasses = {
          'bg': 'bg-brand',
          'color': 'text-brand',
          'icon': 'primary'
        };
        break;
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

  open() {
    if (this.elementsCajaHerramientas.second) {
      this.modalReference = this.modalService.open(this.modalCajaHerramientas, { windowClass: 'toolbox' });
    } else {
      this.modalReference = this.modalService.open(this.modalCajaHerramientas, { windowClass: 'toolbox-sm' });
    }
    // Closes modal when back button is clicked
    this.location.onPopState(() => this.modalReference.close());
  }

}
