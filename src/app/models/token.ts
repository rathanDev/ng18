export class Tokens {
  accessToken: string;
  refreshToken: string;

  constructor(a: string, r: string) {
    this.accessToken = a;
    this.refreshToken = r;
  }
}
