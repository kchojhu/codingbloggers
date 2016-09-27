import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {

  constructor(public af: AngularFire) {}
  login() {
    this.af.auth.login();
  }
}
