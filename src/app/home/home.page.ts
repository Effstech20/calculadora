import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado: string = "0";
  memoria: string = "";
  verifica_zero: boolean = true;
  operador_inserido: boolean = false;
  is_segundo_elemento: boolean = false;
  primeiro_elemento: string = "";
  segundo_elemento: string = "";
  operador: string = "";
  is_novo_calculo: boolean = false;


  constructor() { }

  digitos(valor: string) {
    if (this.is_novo_calculo) {
      this.resetar();
      if(this.is_segundo_elemento){
        this.segundo_elemento += valor;
        this.resultado += valor;
      } else {
        if (this.verifica_zero) {
          this.resultado = valor;
          this.verifica_zero = false;
        } else {
          this.resultado += valor;
        }
      }
    } else {
      if(this.is_segundo_elemento){
        this.segundo_elemento += valor;
        this.resultado += valor;
      } else {
        if (this.verifica_zero) {
          this.resultado = valor;
          this.verifica_zero = false;
        } else {
          this.resultado += valor;
        }
      }
    }

  }

  operadores(operador: string) {
    if (!this.operador_inserido && this.verifica_zero == false) {
      this.primeiro_elemento = this.resultado;
      this.resultado += operador;
      this.operador_inserido = true;
      this.operador = operador;
      this.is_segundo_elemento = true;
    }
  }

  calcular() {

    if (this.operador == "+" && this.segundo_elemento != "") {
      //this.memoria = this.resultado;
      this.resultado = (parseInt(this.primeiro_elemento) + parseInt(this.segundo_elemento)).toString();
      //this.memoria += "=" + this.resultado;
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else if (this.operador == "-" && this.segundo_elemento != "") {
      this.resultado = (parseInt(this.primeiro_elemento) - parseInt(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else if (this.operador == "*" && this.segundo_elemento != "") {
      this.resultado = (parseInt(this.primeiro_elemento) * parseInt(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else if (this.operador == "/" && this.segundo_elemento != "") {
      this.resultado = (parseInt(this.primeiro_elemento) / parseInt(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else {
      if (this.operador == "") {
        alert("Nenhum operador foi selecionado.")
      } /*else if (this.segundo_elemento == "" && this.operador == "") {
        alert("Nenhum elemento foi definido.")
      }*/ else {
        alert("O segundo elemento não foi definido.")
      }
    }
  }

  resetar() {
    this.resultado = "0";
    //this.memoria = ""
    this.verifica_zero = true;
    this.operador_inserido = false;
    this.is_segundo_elemento = false;
    this.primeiro_elemento = "";
    this.segundo_elemento = "";
    this.operador = "";
    this.is_novo_calculo = false;
  }

}home.page.html:


<ion-content [fullscreen]="true">
  <ion-grid id="container">
    <h3>{{memoria}}</h3>
    <h1>{{resultado}}</h1>
    <ion-row>
      <ion-col>
        <ion-button (click)="digitos('7')">7</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="digitos('8')">8</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="digitos('9')">9</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="operadores('+')">+</ion-button>
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col>
        <ion-button (click)="digitos('4')">4</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="digitos('5')">5</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="digitos('6')">6</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="operadores('-')">-</ion-button>
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col>
        <ion-button (click)="digitos('1')">1</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="digitos('2')">2</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="digitos('3')">3</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="operadores('*')">*</ion-button>
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col>
        <ion-button (click)="digitos('0')">0</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="resetar()">C</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="calcular()">=</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="operadores('/')">/</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
home.page.scss:



#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

container a {
  text-decoration: none;
}

h1, h3 {
  text-align: right;
  padding-right: 10%;
}