export class UserCredentials {
  email: string;
  password: string;

  constructor(u: string, p: string) {
    this.email = u;
    this.password = p;
  }
}
