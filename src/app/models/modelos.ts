/**
 * Modelo Sexo e Interface de Implementação
 */
export interface ISexo {
    pkSexo      : number,
    nome        : string
}

export class Sexo implements ISexo {
    pkSexo      =   0;
    nome        =   "";
}











/**
 * Modelo Localidade e Interface de Implementação
 */
export interface ILocalidade {
    pkLocalidade    : number,
    nome            : string,
    fkLocalidade    : number
}
export class Localidade implements ILocalidade {
    pkLocalidade    = 0;
    nome            = "";
    fkLocalidade    =  0;
}






/**
 * Modelo Pessoa e Interface de Implementação
 */
export interface IPessoa {
    pkPessoa            :   number,
    nome                :       string,
    dataNascimento      : Date,
    fkLocalNascimento   : Localidade,
    numeroIdentificacao : string,
    ehNacional          : boolean,
    fkResidencia        : any,
    fkSexo              : Sexo,
    dataEmissao         : Date,
    prazoValidade       : Date,
    vitalicio           : boolean,
    pai                 : string,
    mae                 : string
}
export class Pessoa implements IPessoa {
    pkPessoa            = 0;
    nome                = "";
    dataNascimento      = new Date();
    fkLocalNascimento   = new Localidade();
    numeroIdentificacao = "";
    ehNacional          = true;
    fkResidencia        = new Localidade();
    fkSexo              = new Sexo();
    dataEmissao         = new Date();
    prazoValidade       = new Date();
    vitalicio           = false;
    pai                 = "";
    mae                 = "";
}