import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  OnInit, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  host: {
    '(document:click)': 'checkClickLocation($event)',
  },
  animations: [
    trigger('heroState', [
      state('inactive', style({
        height: 0,
        opacity: 0
      })),
      state('active', style({
        height: '*',
        opacity: 1
      })),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ])
  ]
})
export class LoginComponent implements OnInit {

  test = 'inactive';

  showLoginForm() {
    this.test = this.test === 'inactive' ? 'active' : 'inactive';
  }

  constructor(private elementRef:ElementRef) {
  }

  checkClickLocation(event) {
    if (this.test === 'active' && !this.elementRef.nativeElement.contains(event.target)) {
      this.test = 'inactive';
    }
  }

  ngOnInit() {
  }

}
