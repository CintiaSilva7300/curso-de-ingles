import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
} from '@angular/core';
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

  public tentativas: number = 4;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    console.log('componente destruido');
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    console.log('tentativas inicial', this.tentativas);
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      // alert('A tradução esta certa');

      //trocar pergunta da rodada
      this.rodada++;

      //progresso
      this.progresso = this.progresso + 100 / this.frases.length;

      if (this.rodada === 4) {
        this.encerrarJogo.emit('Vitoria');
        // alert('Parabéns você foi inteligente. Vitoria!!!');
      }

      //atualiza o objeto rodadaFrase
      this.atualizaRodada();
    } else {
      this.tentativas--;
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('Derrota');
        // alert("Que triste você foi ruim nessa :'( ");
      }

      // alert('A tradução esta errada');
    }
  }

  public atualizaRodada(): void {
    //define a frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada];

    //limpar resposta
    this.resposta = '';
  }
}
