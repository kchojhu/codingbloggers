import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = 'inactive';
  showLoginForm() {
    this.test = this.test === 'inactive' ? 'active' : 'inactive';
  }


}
