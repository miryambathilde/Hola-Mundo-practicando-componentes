import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* IMPORT DEL COMPONENTE DASHBOARD */
import { DashboardComponent } from './dashboard/dashboard.component';
/* IMPORT DEL COMPONENTE NAVBAR */
import { NavbarComponent } from './navbar/navbar.component';
/* IMPORT DEL COMPONENTE FOOTER */
import { FooterComponent } from './footer/footer.component';
import { TablaComponent } from './dashboard/tabla/tabla.component';
import { ListaComponent } from './dashboard/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    /* COMPONENTE DASHBOARD */
    DashboardComponent,
    /* COMPONENTE NAVBAR */
    NavbarComponent,
    /* COMPONENTE FOOTER */
    FooterComponent,
    TablaComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
