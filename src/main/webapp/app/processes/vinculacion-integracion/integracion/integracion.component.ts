import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'jhi-integracion',
  templateUrl: './integracion.component.html',
  styleUrls: ['./integracion.component.scss']
})
export class IntegracionComponent implements OnInit {

  private modalReference: any;
  public imgRol: string; // url imagen del rol a mostrar.
  // Variable que almacena todos los pasos del componente integración, e incluye la url del
  // recurso en caso de tener.
  public stepsInfo = {
    // Primera aproximación
    first: [
      { 'text': '1. Llamada a firmar contrato (talento & gestión en compañia de jefe inmediato)' },
      {
        'text': '2. Envío del video de bienvenida (t&g)',
        'isHighlighted': true, 'src': '/content/images/integracion/video-bienvenida.mp4',
        'isVideo': true
      },
      { 'text': '3. Información previa de la organización (t&g)', 'isHighlighted': true, 'src': '/content/images/integracion/info-organizacion.jpg' },
      { 'text': '4. Exámenes médicos' },
      { 'text': '5. Solicitud documentos de ingreso' },
      { 'text': '6. Información para el primer día de ingreso', 'isHighlighted': true, 'src': '/content/images/integracion/info-primerdia.jpg' },
    ],
    // Primer día
    second: [
      { 'text': '1. Decoración del puesto de trabajo (personal con puesto de trabajo)' },
      { 'text': '2. Entrega de la ruta del sabor', 'isHighlighted': true, 'src': '/content/images/integracion/ruta-sabor.jpg' },
      { 'text': '3. Entrega de la invitación a la inducción.', 'isHighlighted': true, 'src': '/content/images/integracion/invitacion.jpg' },
      { 'text': '4. Regalo de bienvenida', 'isHighlighted': true, 'src': '/content/images/integracion/regalo.jpg' },
      { 'text': '5. Recibimiento por parte del jefe inmediato (primer o segundo dia despues del ingreso).' },
      { 'text': '6. Explicación del proceso de inducción (jefe Inmediato)' },
      { 'text': '7. Cursos virtuales (acompañamiento y asesoria)' }
    ],
    // Primer mes
    third: [
      { 'text': '1. Inducción al cargo.', 'isHighlighted': true },
      { 'text': '2. Comunicado de las nuevas caras de nuestra casa.', 'isHighlighted': true, 'src': '/content/images/integracion/nuevas-caras.jpg' },
      { 'text': '3. Verificación del proceso de inducción.', 'isHighlighted': true, 'src': '/content/images/integracion/verificacion.jpg' }
    ],
    // Primer trimestre
    fourth: [
      { 'text': '1. Garantizar que el nuevo colaborador Realice la encuesta de satisfacción' },
      { 'text': '2. Acompañamiento del proceso de Integración' },
      { 'text': '3. Activación del balance de consecuencias', 'isHighlighted': true }
    ]
  };

  constructor(private router: Router, private modalService: NgbModal, private location: PlatformLocation, private elem: ElementRef) { }

  ngOnInit() {
    const steps = this.elem.nativeElement.querySelectorAll('.item');
    const panel = this.elem.nativeElement.querySelector('.panel');
    const imgUni = this.elem.nativeElement.querySelector('.img-uni');
    const timeOutBetweenSteps = 650;
    let i = 0;

    // Animación de la página
    const intervalo = setInterval(() => {
      if (i < steps.length) {
        if (((i + 1) % 2) === 0) {
          steps[i].classList.add('slide-to-top');
        } else {
          steps[i].classList.add('slide-to-bottom');
        }
        steps[i].classList.remove('hide');
        i++;
      } else {
        this.animateHighlights();
        panel.classList.add('slide-to-right');
        panel.classList.remove('hide');
        setTimeout(() => {
          imgUni.classList.add('slide-to-right');
          imgUni.classList.remove('hide');
        }, 400);
        clearInterval(intervalo);
      }
    }, timeOutBetweenSteps);
  }

  animateHighlights() {
    const timeOutHighlights = 300;
    const highlights = this.elem.nativeElement.querySelectorAll('.highlight');
    let i = 0;

    // Animación de los botones
    const intervaloDos = setInterval(() => {
      if (i < highlights.length) {
        highlights[i].classList.add('tremble');
        i++;
      } else {
        clearInterval(intervaloDos);
      }
    }, timeOutHighlights);
  }

  openUniversity() {
    const options = {
      op: ['3', '4']
    };
    this.router.navigate(['/proceso/universidad'], { queryParams: options });
  }

  openModalRoles(modal, imgUrl: string) {
    this.imgRol = imgUrl;
    this.modalReference = this.modalService.open(modal, { windowClass: 'modal-rol' });
    // Closes modal when back button is clicked
    this.location.onPopState(() => this.modalReference.close());
  }

  // Método usado para pausar un video cuando se cierra la ventana 'media'
  pauseVideo() {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer');
    videoPlayer.pause();
  }

  // Método usado para volver a la página anterior
  goBack() {
    this.location.back();
  }
}
