import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css'],
})
export class TentativasComponent implements OnInit {
  public coracaoVazio: string = '../../../assets/img/img2.png';
  public coracaoCheio: string = '../../../assets/img/img1.png';

  constructor() {}

  ngOnInit(): void {}
}
