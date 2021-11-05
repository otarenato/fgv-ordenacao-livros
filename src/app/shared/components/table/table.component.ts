import { Component, Input, OnInit } from '@angular/core';
import { Livro } from '../../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() data: Livro[] = new Array<Livro>();

  ascTitulo: boolean = false;
  ascAutor: boolean = false;
  ascEdicao: boolean = false;

  ngOnInit(): void {
  }

  ordenarTitulo(sort: string) {
    if (sort === 'asc') {
      this.data = this.data.sort((a, b) => (a.titulo < b.titulo ? -1 : 1));
    } else {
      this.data = this.data.sort((a, b) => (a.titulo > b.titulo ? -1 : 1));
    }
  }

  ordenarAutor(sort: string) {
    if (sort === 'asc') {
      this.data = this.data.sort((a, b) => (a.autor < b.autor ? -1 : 1));
    } else {
      this.data = this.data.sort((a, b) => (a.autor > b.autor ? -1 : 1));
    }
  }

  ordenarEdicao(sort: string) {
    if (sort === 'asc') {
      this.data = this.data.sort((a, b) => (a.edicao < b.edicao ? -1 : 1));
    } else {
      this.data = this.data.sort((a, b) => (a.edicao > b.edicao ? -1 : 1));
    }
  }

}
