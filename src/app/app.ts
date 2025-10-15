// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <h1 class="nav-title">Consulta de Filmes OMDB</h1>
        <ul class="nav-links">
          <li><a routerLink="/filme" class="nav-link">Filme Individual</a></li>
          <li><a routerLink="/lista-filmes" class="nav-link">Lista de Filmes</a></li>
        </ul>
      </div>
    </nav>

    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .navbar { background: #343a40; color: white; padding: 1rem 0; }
    .nav-container { 
      max-width: 1200px; 
      margin: 0 auto; 
      display: flex; 
      justify-content: space-between; 
      align-items: center;
      padding: 0 20px;
    }
    .nav-title { margin: 0; font-size: 1.5rem; }
    .nav-links { list-style: none; display: flex; gap: 20px; margin: 0; }
    .nav-link { 
      color: white; 
      text-decoration: none; 
      padding: 5px 10px;
      border-radius: 4px;
      transition: background 0.3s;
    }
    .nav-link:hover { background: rgba(255,255,255,0.1); }
    .main-content { padding: 20px; }
  `]
})
export class AppComponent {
  title = 'consulta-filmes';
}