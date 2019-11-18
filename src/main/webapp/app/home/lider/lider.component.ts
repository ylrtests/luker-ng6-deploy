import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'jhi-lider',
  templateUrl: './lider.component.html',
  styleUrls: ['./lider.scss']
})
export class LiderComponent implements OnInit, AfterViewInit, OnDestroy {

  public processClasses: any;

  constructor(private elementRef: ElementRef,
    private renderer2: Renderer2, private location: Location) { }

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

}
