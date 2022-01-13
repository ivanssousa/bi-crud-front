import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Sexo} from '../models/modelos';

const endPoint = environment.urlApi+"sexo";

@Injectable({
  providedIn: 'root'
})
export class SexoService {

  constructor(private client: HttpClient) 
  {
  }


  public listar() : Observable<any> {
    return this.client.get<Sexo>( endPoint )
                .pipe(
                  catchError(this.tratamentoErro)
                );
  }

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

}
