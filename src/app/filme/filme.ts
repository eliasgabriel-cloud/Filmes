import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmeService } from '../model/filme-service';
import { Filme } from '../model/filme';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filme.html',
  styleUrls: ['./filme.css']
})
export class FilmeComponent {
  titulo = '';
  filme: any;
  erro = '';

  constructor(private filmeService: FilmeService) {}

  buscarFilme() {
    if (!this.titulo.trim()) {
      this.erro = 'Digite o nome de um filme.';
      this.filme = null;
      return;
    }

    this.filmeService.obterFilme(this.titulo).subscribe({
      next: (dados) => {
        if (dados.Response === 'False') {
          this.erro = 'Filme não encontrado.';
          this.filme = null;
        } else {
          this.filme = dados;
          this.erro = '';
        }
      },
      error: () => {
        this.erro = 'Erro ao buscar filme.';
        this.filme = null;
      }
    });
  }
}
