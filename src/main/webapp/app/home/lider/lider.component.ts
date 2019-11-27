import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Location, PlatformLocation } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-lider',
  templateUrl: './lider.component.html',
  styleUrls: ['./lider.scss']
})
export class LiderComponent implements OnInit, AfterViewInit, OnDestroy {

  private modalReference: any;
  public processClasses: any;
  public urlImgModal = '';

  constructor(private elementRef: ElementRef,
    private renderer2: Renderer2, private location: Location, private lct: PlatformLocation, private modalService: NgbModal) { }

  ngOnInit() {
    this.processClasses = {
      'bg': 'bg-6',
      'color': 'color-6',
      'icon': 'sixth'
    };
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#808080';
    this.elementRef.nativeElement.ownerDocument.body.style.fontFamily = 'Hermes';
    this.elementRef.nativeElement.ownerDocument.querySelector('.jh-card').style.padding = '0';
  }

  ngOnDestroy() {
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.body, 'style');
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.querySelector('.jh-card'), 'style');
  }

  // Función que se usa para volver a la página anterior
  goBack() {
    this.location.back();
  }

  // Función que abre el modal de la imagen de Estilo de Liderazgo CasaLuker
  openModalLiderazgo(modal, imgUrl: string) {
    this.modalReference = this.modalService.open(modal);
    this.urlImgModal = imgUrl;
    // Closes modal when back button is clicked
    this.lct.onPopState(() => this.modalReference.close());
  }

}
