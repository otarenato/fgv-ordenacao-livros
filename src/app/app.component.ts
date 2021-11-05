import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../app/shared/services';
import { Livro } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'OrdenacaoLivros';

  constructor(private livrosService: LivrosService) {}

  listLivros: Livro[] = new Array<Livro>();

  ngOnInit() {
    this.livrosService.listarLivros().subscribe(res => {
      if (res) {
        this.listLivros = res;
      }
    })
  }
}
