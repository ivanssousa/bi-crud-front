import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Pessoa, Sexo} from '../models/modelos';

const endPoint = environment.urlApi+"pessoa";
@Injectable({
  providedIn: 'root'
})
export class PessoaService 
{
  constructor(private client: HttpClient)  {}

  listar() : Observable<any>  {
    return this.client.get<Pessoa>( endPoint )
                .pipe(
                  catchError(this.tratamentoErro)
                );
  }

  salvar( pessoa: Pessoa  ) : Observable<any> {
    return this.client.post( endPoint, pessoa )
                .pipe(
                  catchError(this.tratamentoErro)
                );
  }

  apagar( pkPessoa: number ) : Observable<any> {
    return this.client.delete( endPoint+"/"+pkPessoa )
                .pipe(
                  catchError(this.tratamentoErro)
                );
  }
  
  private tratamentoErro(erro: HttpErrorResponse): any {
    if (erro.error instanceof ErrorEvent) {
      console.error('Ocorreu um Erro ao Requisitar:', erro.error.message);
    } else {
      console.error(`Código Retornado ${erro.status}, `);
      console.error(`Resposta: `, erro.error );
    }
    return throwError(
      'Não foi possível completar a requisição');
  }
}
 