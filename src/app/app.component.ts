import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  showSpan = false;

  show() {
    alert('123456789');
  }

  showValue(value: HTMLElement) {
    console.log(value);
    value.innerHTML = 'change something else';
  }

  doSomethingWhenModelChange(value) {
    console.log(value);
    this.name = value;
  }

  getEvent(event) {
    console.log(event);
    this.name;
  }
}
