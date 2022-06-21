class CalcController {

    constructor() {

        /*O comando "this" referencia atributos e métodos. 
        Sendo atributos - váriaveis, e métodos - funções*/
        this._displayCalc = "0";
        this._dataAtual;

    }

    /*getters e setters permitem definir como acessar os valores*/
    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        this._displayCalc = valor;
    }

    get dataAtual() {
        return this._dataAtual;
    }

    set dataAtual(valor) {
        this._dataAtual = valor;
    }

}