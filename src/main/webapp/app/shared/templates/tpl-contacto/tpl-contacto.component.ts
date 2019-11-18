import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-tpl-contacto',
  templateUrl: './tpl-contacto.component.html',
  styleUrls: ['./tpl-contacto.scss']
})
export class TplContactoComponent implements OnInit {

  contactList = [
    {
      'title': 'Comercial',
      'name': 'Ángela Chaparro',
      'position': 'Socia de negocio talento & negocio',
      'email': 'achaparro@casaluker.com.co',
      'gender': 'f'
    },
    {
      'title': 'Marcas y marcas de canal',
      'name': 'Santiago Silva',
      'position': 'Socio de negocio talento & negocio',
      'email': 'ssilva@casaluker.com.co',
      'gender': 'm'
    },
    {
      'title': 'Cabas y logística',
      'name': 'Gina Pinzón',
      'position': 'Socia de negocio talento & negocio',
      'email': 'gpinzon@casaluker.com.co',
      'gender': 'f'
    },
    {
      'title': '',
      'name': 'Alexandra Fajardo',
      'position': 'Gerente Talento & Gestión',
      'email': 'mfajardo@casaluker.com.co',
      'gender': 'f'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
