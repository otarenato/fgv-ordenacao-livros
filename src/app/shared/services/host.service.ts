import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor() { }

  /**
   * Método para capturar através da url, onde o projeto está em funcionamento
   * e passar o caminho correto
   *
   * @returns o caminho (root) do path
   *
   */
  getDomainUrl(): string {
    const host = window.location.hostname;
    const url = host === 'localhost' ? '../../../' : 'https://otarenato.github.io/fgv-ordenacao-livros/';
    return url;
  }
}
