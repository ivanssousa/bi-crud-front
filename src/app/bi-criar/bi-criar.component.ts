import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Localidade, Sexo, Pessoa } from '../models/modelos';
import { LocalidadeService } from '../services/localidade.service';
import { PessoaService } from '../services/pessoa.service';
import { SexoService } from '../services/sexo.service';

import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-bi-criar',
  templateUrl: './bi-criar.component.html',
  styleUrls: ['./bi-criar.component.css']
})
export class BiCriarComponent implements OnInit {

  formNovaPessoa = new FormGroup({
    nomeCompleto          : new FormControl(null, [Validators.required, Validators.maxLength(250)]),
    nDocumentoIdentidade  : new FormControl(null, [Validators.required, Validators.maxLength(100)]),
    sexo                  : new FormControl(),
    dataNascimento        : new FormControl(),
    nomePai               : new FormControl(),
    nomeMae               : new FormControl(),
    eNacional             : new FormControl(),
    eVitalicio            : new FormControl(),
    dataEmissao           : new FormControl(),
    dataValidade          : new FormControl(),
    cidade                : new FormControl(),
    municipio             : new FormControl(),
    bairro                : new FormControl()     
  });

  listaSexo:        Sexo[] = [];
  eNacional:        boolean  = false;
  eVitalicio:       boolean  = false;

  cidadeMensagem: string = '';
  municipioMensagem: string = '';
  bairroMensagem: string = '';


  listaLocalidadeCidade:      Localidade[] = [];
  listaLocalidadeMunicipio:   Localidade[] = [];
  listaLocalidadeBairro:      Localidade[] = [];

  novaPessoa : Pessoa = new Pessoa();

  constructor(
    private sexoService: SexoService,
    private localidadeService: LocalidadeService,
    private pessoaService : PessoaService,
    private router: Router
  ) 
  {}
  
  
  
  ngOnInit(): void 
  {
    this.sexoService.listar()
        .subscribe((res)=>{
          this.listaSexo = res;
          console.log( res );
        });

    this.localidadeService.listar()
        .subscribe((res)=>{
          this.listaLocalidadeCidade = res;
          console.log( res );
        });
  }


  mudarCidade(localidade:any)
  {
 
    if ( localidade )
    {
      this.localidadeService.findByLocalidade( localidade  )
      .subscribe((res)=>{
        this.listaLocalidadeMunicipio   = res;
        this.cidadeMensagem             = "Cidade Selecionada";
        this.municipioMensagem          = res.length  < 1 ? 'Não Existem Municipios Para Exibir' : 'Municipios Carregados com Sucesso.';
      });

    }
  }

  mudarMunicipio(municipio:any)
  {
    if ( municipio )
    {
      this.localidadeService.findByLocalidade( municipio )
          .subscribe((res)=>{
            this.listaLocalidadeBairro = res;
            this.municipioMensagem = 'Municipio Selecionado';
            this.bairroMensagem = res.length  < 1 ? 'Não Existem Bairros Para Exibir' : 'Bairros Carregados com Sucesso.';
          });

    }
  }


  listarBilhetes()
  {
    this.router.navigate(['/bi']);
  }


  salvar()
  {
    let residencia  = new Localidade();
    residencia.pkLocalidade = this.formNovaPessoa.value.bairro;

    let localNascimento  = new Localidade();
    localNascimento.pkLocalidade = this.formNovaPessoa.value.bairro;

    let sexo  = new Sexo();
    sexo.pkSexo   = this.formNovaPessoa.value.sexo;

    this.novaPessoa.nome                  = this.formNovaPessoa.value.nomeCompleto;
    this.novaPessoa.numeroIdentificacao   = this.formNovaPessoa.value.nDocumentoIdentidade;
    this.novaPessoa.fkSexo                = this.formNovaPessoa.value.sexo;
    this.novaPessoa.dataNascimento        = this.formNovaPessoa.value.dataNascimento;
    this.novaPessoa.pai                   = this.formNovaPessoa.value.nomePai;
    this.novaPessoa.mae                   = this.formNovaPessoa.value.nomeMae;
    this.novaPessoa.ehNacional            = this.formNovaPessoa.value.eNacional;
    this.novaPessoa.vitalicio             = this.formNovaPessoa.value.eVitalicio;
    this.novaPessoa.dataEmissao           = this.formNovaPessoa.value.dataEmissao;
    this.novaPessoa.prazoValidade         = this.formNovaPessoa.value.dataValidade;
    this.novaPessoa.fkResidencia          = this.formNovaPessoa.value.bairro;
    this.novaPessoa.fkLocalNascimento     = this.formNovaPessoa.value.bairro;
    

    console.log( this.novaPessoa );
    this.pessoaService.salvar( this.novaPessoa )
        .subscribe((res:any)=>{
          console.log( res );
          if ( confirm("Cadastro Efectuado com Sucesso. \nDeseja Listar os Bilhetes?") )
          {
            this.router.navigate(['/bi']);
          }
        });
  }
 
}
  