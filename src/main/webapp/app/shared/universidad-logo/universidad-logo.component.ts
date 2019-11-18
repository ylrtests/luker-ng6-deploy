import { Component, OnInit, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-universidad-logo',
  templateUrl: './universidad-logo.component.html',
  styles: ['']
})
export class UniversidadLogoComponent implements OnInit, AfterViewInit {

  private items: any[] = []; // Contiene cada parte del svg
  @Input() opaqueElements ?: Array<number>; // Señala elementos que se desea en opaco ej: [3,4]

  constructor(private elem: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Carga elementos del logo de universidad Luker
    // No se carga usando QuerySelectorAll porque tienen un orden diferente en el SVG
    this.items.push(this.elem.nativeElement.querySelector('#item-one'));
    this.items.push(this.elem.nativeElement.querySelector('#item-two'));
    this.items.push(this.elem.nativeElement.querySelector('#item-three'));
    this.items.push(this.elem.nativeElement.querySelector('#item-four'));
    this.animateMap();
  }

  animateMap() {
    let i = 0;
    const intervalo = setInterval(() => {
      if (i < this.items.length) {
        if (this.opaqueElements) {
          for (const numberOpaque of this.opaqueElements) {
            if ( i === ( numberOpaque - 1 ) ) {
              this.items[i].classList.add('opaque');
              break;
            }
          }
        }
        this.items[i].classList.add('animated');
        i++;
      } else {
        clearInterval(intervalo);
      }
    }, 900);
  }

}
