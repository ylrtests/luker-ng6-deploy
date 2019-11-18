import { Component, OnInit, ElementRef, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModalService } from 'app/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-map-luker',
  templateUrl: './map-luker.component.html'
})
export class MapLukerComponent implements OnInit, AfterViewInit {

  private mapElements: any[] = []; // Contiene cada 'proceso' del mapa de talento
  private logoBrand: any; // Icono de casa luker del mapa de talento
  private shadowItems: any; // Sombras del mapa de talento
  private titles: any[]; // Titulos del mapa de talento
  modalRef: NgbModalRef; // Referencia al modal de Login
  @Input() activeElement ? = 0; // Indica cual elemento del mapa resaltar. Si es 0 ninguno es resaltado
  @Input() shouldOpenLogin ? = false; // Si es igual a "true" debería abrir el login en vez de redireccionar a un proceso.
  @Input() fastLoad ? = false; // Si es igual a "true" carga más rápido de acuerdo a lo definido en animateMap()

  constructor(private elem: ElementRef, private router: Router, private loginModalService: LoginModalService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Carga elementos del mapa de talento
    // No se carga usando QuerySelectorAll porque tienen un orden diferente en el SVG
    this.mapElements.push(this.elem.nativeElement.querySelector('#item-one'));
    this.mapElements.push(this.elem.nativeElement.querySelector('#item-two'));
    this.mapElements.push(this.elem.nativeElement.querySelector('#item-three'));
    this.mapElements.push(this.elem.nativeElement.querySelector('#item-four'));
    this.mapElements.push(this.elem.nativeElement.querySelector('#item-five'));
    this.mapElements.push(this.elem.nativeElement.querySelector('#item-six'));

    // Carga icono de luker
    this.logoBrand = this.elem.nativeElement.querySelector('#brand-logo');
    // Carga ambos titulos
    this.titles = this.elem.nativeElement.querySelectorAll('.title');
    // Carga sombra
    this.shadowItems = this.elem.nativeElement.querySelector('#shadow-circle-items');
    // Anima el mapa.
    this.animateMap();
  }

  animateMap() {
    // Define tiempos de carga
    let timeOut = 600;
    let timeItem = 600;
    // Carga más rápido
    if (this.fastLoad) {
      timeOut = timeOut / 1.8;
      timeItem = timeItem / 1.8;
    }
    setTimeout(() => {
      for (const t of this.titles) {
        t.style.opacity = 1;
      }
      this.logoBrand.style.opacity = 1;
      let i = 0;
      const intervalo = setInterval(() => { // Anima los 'procesos' del mapa de talento
        if (i < this.mapElements.length) {

          if (this.activeElement > 0) { // Existe elemento activo
            if ((this.activeElement - 1) !== i) {
              this.mapElements[i].classList.add('opaque');
            }
          }

          this.mapElements[i].classList.add('animated');
          i++;
        } else {
          this.shadowItems.style.opacity = 1;
          clearInterval(intervalo);
        }
      }, timeItem);
    }, timeOut);
  }

  clickMapItem(link: string) {
    if (this.shouldOpenLogin) {
      this.modalRef = this.loginModalService.open();
    } else {
      // Esta opción solo está disponible si ya inicio sesión
      this.router.navigate([`${link}`]);
    }
  }
}
