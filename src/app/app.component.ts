import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../app/shared/services';
import { Livro } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private livrosService: LivrosService) {}

  listLivros: Livro[] = new Array<Livro>();
  listaVazia: boolean = false;

  ngOnInit() {
    this.listarLivros();
  }

  /**
   * Método para trazer a lista de livros e guardar em uma variável
   * que será passada para o componente de tabela.
   */
  listarLivros(): void {
    this.livrosService.listarLivros().subscribe(res => {
      if (res.length > 0) {
        this.listLivros = res;
        this.listaVazia = false;
      } else {
        this.listaVazia = true;
      }
    },
    error => {
      console.error('log de erro: ', error)
    });
  }
}
