// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { FilmeComponent } from './filme/filme';
import { ListaComponent } from './lista-filmes/lista-filmes';

export const routes: Routes = [
  { path: 'filme', component: FilmeComponent },
  { path: 'lista-filmes', component: ListaComponent },
  { path: '', redirectTo: '/filme', pathMatch: 'full' },
  { path: '**', redirectTo: '/filme' }
];