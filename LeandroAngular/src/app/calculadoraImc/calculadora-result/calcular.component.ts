import { Component } from "@angular/core";

@Component({
    selector: "calculadora-resultado",
    templateUrl: "./calcular.component.html",
    styleUrls: ["./calcular.component.css"]
})

export class CalcularImcComponent{
    peso : number =0;
    altura : number =0;
    imc : number =0;

    constructor(){

    }

    calcularImc(): number {
        let imc = 0;
        let alt = this.altura;
        let pes = this.peso;

        this.imc = pes / (alt ** 2);
        alert(this.imc);

        return this.imc;
    }

}