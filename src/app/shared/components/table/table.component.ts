import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Livro } from '../../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() data: Livro[] = new Array<Livro>();
  @Input() isEmpty: boolean = false;

  ngOnInit(): void {
  }

  /**
   * Método para interceptar mudanças no conteúdo da tabela
   * @param change
   */
  ngOnChanges(change: SimpleChanges) {
    if (this.isEmpty) {
      this.showMessage();
    }
  }

  /**
   * Método para disparar uma mensagem de alerta, caso a tabela não tenha dados para exibição
   */
  showMessage() {
    alert('Não há dados para serem exibidos');
  }

  /**
   * Método para ordenar pelo título do livro, em ordem crescente ou decrescente
   * O que definirá a ordem, será o parâmetro que o método receber, que será uma string
   * definida como:
   * 'asc' => ascendente
   * 'desc' => descendente
   * @param sort
   */
  ordenarTitulo(sort: string) {
    if (sort === 'asc') {
      this.data = this.data.sort((a, b) => (a.titulo < b.titulo ? -1 : 1));
    } else {
      this.data = this.data.sort((a, b) => (a.titulo > b.titulo ? -1 : 1));
    }
  }

  /**
   * Método para ordenar pelo autor do livro, em ordem crescente ou decrescente
   * O que definirá a ordem, será o parâmetro que o método receber, que será uma string
   * definida como:
   * 'asc' => ascendente
   * 'desc' => descendente
   * @param sort
   */
  ordenarAutor(sort: string) {
    if (sort === 'asc') {
      this.data = this.data.sort((a, b) => (a.autor < b.autor ? -1 : 1));
    } else {
      this.data = this.data.sort((a, b) => (a.autor > b.autor ? -1 : 1));
    }
  }

  /**
   * Método para ordenar pela edição do livro, em ordem crescente ou decrescente
   * O que definirá a ordem, será o parâmetro que o método receber, que será uma string
   * definida como:
   * 'asc' => ascendente
   * 'desc' => descendente
   * @param sort
   */
  ordenarEdicao(sort: string) {
    if (sort === 'asc') {
      this.data = this.data.sort((a, b) => (a.edicao < b.edicao ? -1 : 1));
    } else {
      this.data = this.data.sort((a, b) => (a.edicao > b.edicao ? -1 : 1));
    }
  }

}
