import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* IMPORT DEL COMPONENTE DASHBOARD */
import { DashboardComponent } from './dashboard/dashboard.component';
/* IMPORT DEL COMPONENTE NAVBAR */
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    /* COMPONENTE DASHBOARD */
    DashboardComponent,
    /* COMPONENTE NAVBAR */
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
