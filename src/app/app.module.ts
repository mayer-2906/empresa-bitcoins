import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MonedasUsuarioComponent } from './monedas-usuario/monedas-usuario.component';
import { MonedasDisponiblesComponent } from './monedas-disponibles/monedas-disponibles.component';
import { ItemMonedaComponent } from './item-moneda/item-moneda.component';
import { HeaderTableComponent } from './header-table/header-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MonedasUsuarioComponent,
    MonedasDisponiblesComponent,
    ItemMonedaComponent,
    HeaderTableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
