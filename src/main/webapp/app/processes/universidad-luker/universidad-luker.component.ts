import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-universidad-luker',
  templateUrl: './universidad-luker.component.html',
  styleUrls: ['./universidad-luker.scss']
})
export class UniversidadLukerComponent implements OnInit {

  public opaqueElements: Array<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.
      subscribe(
        params => this.opaqueElements = params.getAll('op'));
  }

}
