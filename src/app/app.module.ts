import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCxChziANeQ6qBrfdTHtSbSZE_nyIAkfv8",
  authDomain: "codingbloggers.firebaseapp.com",
  databaseURL: "https://codingbloggers.firebaseio.com",
  storageBucket: "",
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}

