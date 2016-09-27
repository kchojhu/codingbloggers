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
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        opacity: 1,
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        opacity: 1,
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('2000ms ease-in')),
      transition('active => inactive', animate('2000ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'app works!!!!!';
  test = 'inactive';
  showLoginForm() {
    this.test = this.test === 'inactive' ? 'active' : 'inactive';
  }

  login() {
    console.log('hello');
  }
}
