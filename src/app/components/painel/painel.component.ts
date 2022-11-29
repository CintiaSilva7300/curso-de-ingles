import { Component, OnInit } from '@angular/core';
import { Frase } from 'src/app/shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza esta frase: ';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase!: Frase;

  public progresso: number = 0;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {}

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    console.log(this.resposta);
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução esta certa');

      //trocar pergunta da rodada
      this.rodada++;

      //progresso
      this.progresso = this.progresso + 100 / this.frases.length;
      console.log(this.progresso);

      //atualiza o objeto rodadaFrase
      this.atualizaRodada();
    } else {
      alert('A tradução esta errada');
    }
  }

  public atualizaRodada(): void {
    //define a frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada];

    //limpar resposta
    this.resposta = '';
  }
}
