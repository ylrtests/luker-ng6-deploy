import { Component, OnInit, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService, Principal, Account } from 'app/core';
import { Router } from '@angular/router';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    account: Account;
    modalRef: NgbModalRef;

    public carouselImages = [
        // Se añade la fecha actual "getTime()" a la url de la imagen, para no guardarla en cache.
        // Esto debido a la solicitud de obtener imagenes desde un repositorio independiente.
        'https://lukerimages.000webhostapp.com/img/main.jpg',
        'https://lukerimages.000webhostapp.com/img/imagen-1.jpg',
        'https://lukerimages.000webhostapp.com/img/imagen-2.jpg',
        'https://lukerimages.000webhostapp.com/img/imagen-3.jpg',
    ];

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private elementRef: ElementRef,
        private renderer2: Renderer2,
        private router: Router) { }

    ngOnInit() {
        this.principal.identity().then(account => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
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

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        // Aqui simplemente se simula si está o no autenticado
        // En producción se usa el código comentado o el código implementado.
        return true;
        // return this.principal.isAuthenticated();
    }

    goLink(url: string) {
        if (this.isAuthenticated()) {
            this.router.navigate([url]);
        } else {
            this.login();
        }
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
