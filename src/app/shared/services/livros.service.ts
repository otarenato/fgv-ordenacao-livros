import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient, private hostService: HostService) { }



  listarLivros(): Observable<Livro[]> {
    const URL = this.hostService.getDomainUrl();
    return this.http.get<Livro[]>(`${ URL }assets/data/livros.json`);
  }
}
