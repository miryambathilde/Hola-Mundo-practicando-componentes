import { Component, OnInit } from '@angular/core';

@Component({
  /* SELECTOR: nombre del componente app+nombre componente  */
  selector: 'app-dashboard',
  /* TEMPLATE: HTML */
  templateUrl: './dashboard.component.html',
  /* STYLE URL: ARCHIVO CSS */
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
