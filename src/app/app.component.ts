import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  testValue(gameStarted: number) {
    if (gameStarted % 2 === 0) {
      this.evenNumbers.push(gameStarted);
      console.log('it\'s a even');
    } else {
      this.oddNumbers.push(gameStarted);
      console.log('it\'s a odd');
    }
  }
}
