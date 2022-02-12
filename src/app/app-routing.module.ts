import { NgModule, Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MonedasUsuarioComponent } from "./monedas-usuario/monedas-usuario.component";
import { MonedasDisponiblesComponent } from "./monedas-disponibles/monedas-disponibles.component";

const routes : Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'monedasUsuario',
    component: MonedasUsuarioComponent ,
  },
  {
    path: 'monedasDisponibles',
    component: MonedasDisponiblesComponent,
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }


