import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parlamentar } from './parlamentar';

@Injectable({
  providedIn: 'root'
})
export class ParlamentaresService {
  private url = 'https://dadosabertos.camara.leg.br/api/v2/deputados';

  constructor(private http: HttpClient) { }

  buscarParlamentaresPorNome(nome: string): Observable<Parlamentar[]> {
    return new Observable((observer) => {
      this.http.get<any>(`${this.url}?nome=${nome}`).subscribe({
        next: (response) => {
          const parlamentares: Parlamentar[] = response.dados.map((parlamentar: any) => {
            return {
              id: parlamentar.id,
              uri: parlamentar.uri,
              nome: parlamentar.nome,
              siglaPartido: parlamentar.siglaPartido,
              uriPartido: parlamentar.uriPartido,
              siglaUf: parlamentar.siglaUf,
              idLegislatura: parlamentar.idLegislatura,
              urlFoto: parlamentar.urlFoto,
              email: parlamentar.email,
            };
          });
          observer.next(parlamentares);
          observer.complete();
        },
        error: (err) => observer.error(err),
      });
    });
  }
}