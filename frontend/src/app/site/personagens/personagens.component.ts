import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {
  //objetos
  classes = [
    {
      id: 0,
      class: 0,
      nome: 'TEMPLATE',
      vantagem: [0,1],
      quantproef: 0,
      proef: [0,1,2,3],
      equipamento1: [0,1],
      equipamento2: [0,1],
      equipamento3: 0,
    }
  ]

  Raças = [
    {
      id: 0,
      nome: 'TEMPLATE',
      forca: 0,
      desteza: 0,
      constituicao: 0,
      sabedoria: 0,
      inteligencia: 0,
      carisma: 0,
      visaoNot: 0,
      carac: [
        {
          id: 0,
          nome: 'TEMPLATE',
          desc: 'pode fazer sexo a noite' 
        }
      ]
    }
  ]
  equipamento = [
    {
      id: 0,
      nome: 'TEMPLATE',
      desc: '',
      preco: '',
      peso: '',
      qunat: 0,
      type: 0,
      //type 0 - Arma
      tipoArm: '',
      PropriedArm: '',
      AtributArm: '',
      dadDAnoArm: [0,0,0,0,0,0,0,0],
      bonusDanArm: 0,
      //type 1 - Aramdura
      CA: 0,
      atrib: 0,
      forcMin: 0,
      desvFurt: 0,
    }
  ]
  //variaveis
  sel = 0;
  constructor() {}

  ngOnInit(): void {
  }

  Move(id: number){
    if (id == 0 && this.sel <=1){
      this.sel++
    }
    if (id == 1 && this.sel >= 0){
      this.sel--
    }
  }
}
