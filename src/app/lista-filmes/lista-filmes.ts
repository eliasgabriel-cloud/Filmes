// src/app/lista-filmes/lista-filmes.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmeService, ListaFilmes } from '../model/filme-service';
import { Filme } from '../model/filme';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-filmes.html',
  styleUrls: ['./lista-filmes.css']
})
export class ListaComponent {
  titulo = '';
  filmes: any[] = [];
  erro = '';

  constructor(private filmeService: FilmeService) {}

  buscarLista() {
    if (!this.titulo.trim()) {
      this.erro = 'Digite um nome para buscar.';
      this.filmes = [];
      return;
    }

    this.filmeService.obterListaFilmes(this.titulo).subscribe({
      next: (dados) => {
        if (dados.Response === 'False') {
          this.erro = 'Nenhum filme encontrado.';
          this.filmes = [];
        } else {
          this.filmes = dados.Search;
          this.erro = '';
        }
      },
      error: () => {
        this.erro = 'Erro ao buscar filmes.';
        this.filmes = [];
      }
    });
  }
}
