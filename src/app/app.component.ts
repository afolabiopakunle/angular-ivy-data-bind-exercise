import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  username = ''
  output = '';

  addUser() {
    this.output = this.username;
    this.username = '';
  }
}
