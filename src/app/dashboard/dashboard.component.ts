import { Component, OnInit } from '@angular/core';

@Component({
  /* SELECTOR: nombre del componente app+nombre componente  */
  selector: 'app-dashboard',
  /* TEMPLATE: HTML url del template */
  templateUrl: './dashboard.component.html',
  /* STYLE URL: ARCHIVO CSS url del css de estilos */
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
