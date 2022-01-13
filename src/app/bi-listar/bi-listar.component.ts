import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Pessoa } from '../models/modelos';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-bi-listar',
  templateUrl: './bi-listar.component.html',
  styleUrls: ['./bi-listar.component.css']
})
export class BiListarComponent implements OnInit {

    pessoas: Pessoa[] = [];

  first = 0;

  rows = 10;

  constructor(
      private pessoaService: PessoaService,
      private router: Router
  ) 
  {

  }

  ngOnInit(): void {
    this.listar();
  }

  listar()
  {
    this.pessoaService.listar()
    .toPromise()
    .then( (res: Pessoa[]) => {
        this.pessoas = res;
    });
  }


  novoBilheteIdentidade()
  {
    this.router.navigate(['/bi/criar']);
  }

  editarBilhete( value: any )
  {
    console.log(value);
  }

  apagarBilhete( value: any )
  {
      if ( confirm("Deseja Realmente Apagar Este Bilhete?") )
      {
          this.pessoaService.apagar( value )
                            .toPromise()
                            .then((res)=>{
                                console.log(res);

                                this.listar();
                            })
                            .catch((error)=>{
                                console.log(error);
                            });
      }
  }

  formatarDate( value:any )
  {
    return new Date( value ).toLocaleDateString();
  }

  next() {
      this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.pessoas ? this.first === (this.pessoas.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.pessoas ? this.first === 0 : true;
  }
}
