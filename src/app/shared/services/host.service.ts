import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor() { }

  getDomainUrl(): string {
    const host = window.location.hostname;
    const url = host === 'localhost' ? '../../../' : 'https://otarenato.github.io/fgv-ordenacao-livros/';
    return url;
  }
}
