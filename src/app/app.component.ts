import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .foo {
      color: white;
    }
  `]
})
export class AppComponent {
  username = '';
  usernameIsEmpty = true;

  showText = true;
  buttonClicks = [];
  changeStyles = false;

  onUpdateUsername(event: any) {
    event.target.value.length > 0 ? this.usernameIsEmpty = false : this.usernameIsEmpty = true;
  }

  onSubmitUsername() {
    this.username = '';
  }

  onDisplayDetailsClick() {
    this.changeStyles = this.buttonClicks.length >= 5 ? true : false
    this.buttonClicks.push(Date());
    this.showText = this.showText === true ? false : true;
  }

  getDisplayValue() {
    return this.showText === true ? 'block' : 'none';
  }
}
