// src/app/model/filme-service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Filme } from './filme';
import { Observable } from 'rxjs';

export interface ListaFilmes {
  Search: Filme[];
  totalResults: string;
  Response: string;
  Error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private http = inject(HttpClient);
  private API_URL = "http://www.omdbapi.com/";
  private API_KEY = "3032f0b6";  

  obterFilme(titulo: string): Observable<any> {
    const tituloCodificado = encodeURIComponent(titulo.trim());
    return this.http.get<any>(`${this.API_URL}?t=${tituloCodificado}&apikey=${this.API_KEY}`);
  }

  obterListaFilmes(titulo: string): Observable<ListaFilmes> {
    const tituloCodificado = encodeURIComponent(titulo.trim());
    return this.http.get<ListaFilmes>(`${this.API_URL}?s=${tituloCodificado}&type=movie&apikey=${this.API_KEY}`);
  }
}