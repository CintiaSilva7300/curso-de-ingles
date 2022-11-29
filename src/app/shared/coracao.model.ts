export class Coracao {
  constructor(
    public cheio: boolean,
    public urlCoracaoCheio: string = '../../../assets/img/img1.png',
    public urlCoracaoVazio: string = '../../../assets/img/img2.png'
  ) {}

  public exiteCoracao(): string {
    if (this.cheio) {
      return this.urlCoracaoCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }
}
