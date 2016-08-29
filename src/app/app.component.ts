import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works! great!';
  items: FirebaseListObservable<any[]>;

  constructor(public angularFire:AngularFire) {
    this.items = angularFire.database.list('/items');
    this.angularFire.auth.subscribe(auth => {
      console.log(auth);
      // auth.
    });
  }

  login() {
    this.angularFire.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
  }
}
