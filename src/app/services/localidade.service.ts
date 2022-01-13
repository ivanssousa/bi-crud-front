import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Localidade} from '../models/modelos';


const endPoint = environment.urlApi+"localidade";
@Injectable({
  providedIn: 'root'
})
export class LocalidadeService 
{
  constructor(private client: HttpClient) {}

  private tratamentoErro(erro: HttpErrorResponse): any {
    if (erro.error instanceof ErrorEvent) {
      console.error('Ocorreu um Erro ao Requisitar:', erro.error.message);
    } else {
      console.error(
        `Código Retornado ${erro.status}, ` +
        `Resposta: ${erro.error}`);
    }
    return throwError(
      'Não foi possível completar a requisição');
  }

  public listar() : Observable<any> {
    return this.client.get<Localidade>( endPoint )
                .pipe(
                  catchError(this.tratamentoErro)
                );
  }

  public findByLocalidade( fkLocalidade : number ) : Observable<any> {
    return this.client.get<Localidade>( endPoint +"/findByLocalidade/"+ fkLocalidade )
                .pipe(
                  catchError(this.tratamentoErro)
                );
  }
}
