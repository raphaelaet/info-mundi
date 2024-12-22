import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaPaisComponent } from './busca-pais/busca-pais.component';
import { AcertaBandeirasComponent } from './acerta-bandeiras/acerta-bandeiras.component';

const routes: Routes = [
  {path: 'home', component: BuscaPaisComponent},
  {path: 'jogo', component: AcertaBandeirasComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
