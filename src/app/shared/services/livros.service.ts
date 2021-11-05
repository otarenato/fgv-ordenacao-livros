import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) { }

  listarLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>('../../../assets/data/livros.json');
  }
}
