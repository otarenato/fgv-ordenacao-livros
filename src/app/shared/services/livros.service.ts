import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) { }

  /**
   * Método para buscar no mock, os livros cadastrados e trazer em forma de um array de objetos
   * para a aplicação consumir
   *
   * @returns um array de objetos do tipo "Livro"
   *
   */
  listarLivros(): Observable<Livro[]> {
    const URL = environment.urlRoot;
    return this.http.get<Livro[]>(`${ URL }assets/data/livros.json`);
  }
}
