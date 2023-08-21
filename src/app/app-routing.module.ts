
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ContactComponent } from './shared/pages/contact/contact.component';




const routes: Routes = [
  // {
  //   path: "",
  //   component: HomePageComponent
  // },
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "countries",
    loadChildren: () => import("./countries/countries.module").then(module => module.CountriesModule)
    // lazy loading: simplemente es una función que importa un módulo, pero sólo cuando se usa
  },
  {
    path: "**",
    redirectTo: "countries"
    // indicamos que cualquier página que no sea ningunna de las anteriores
    // (incluyendo el vacío después del slash) se rideccionará a donde indicamos
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ) // el .forRoot() se usa para el Routing principal
  ],
  exports: [
    RouterModule
  ],
  // declarations: [NameComponent],
  // providers: [],
})
export class AppRoutingModule { }


