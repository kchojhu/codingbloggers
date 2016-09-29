import {Injectable, EventEmitter} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {User} from "../model/user";
import {AppEvent} from "../model/app-event";

@Injectable()
export class UserService {
  user:User;

  userEvent:EventEmitter<AppEvent> = new EventEmitter();

  constructor(private angulareFire: AngularFire) {
    this.angulareFire.auth.subscribe(auth => {
      if (auth) {
        console.info("Logged In", auth);
        this.user = new User();
        this.user.email = auth.auth.email;
        this.user.name = auth.auth.displayName;
        this.user.photoUrl = auth.auth.photoURL;
        this.user.provider = auth.auth.providerData[0].providerId;
        console.log("User", this.user);
        this.userEvent.next({
          type: 'loggedIn',
          data: this.user
        });
      } else {
        console.info("Not logged in");
        this.userEvent.next({
          type: 'notLoggedIn'
        });
      }

    });
  }

  login(type:string) {
    switch(type) {
      case 'facebook':
        this.angulareFire.auth.login({
          provider: AuthProviders.Facebook,
          method: AuthMethods.Redirect
        });
        break;
      case 'google':
        this.angulareFire.auth.login({
          provider: AuthProviders.Google,
          method: AuthMethods.Redirect
        });
        break;
    }
  }

  logout() {
    this.angulareFire.auth.logout();
    this.user = null;
    this.userEvent.next({
      type: 'loggedOut'
    });
  }



}
