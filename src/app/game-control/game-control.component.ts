import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  gameInterval;
  number = 0;
  @Output() gameStarted = new EventEmitter<number>();
  constructor() { }

  startGame() {
    // this.number ++;
    this.gameInterval = setInterval(() => { 
      this.gameStarted.emit(this.number + 1);
      this.number++;
    }, 1000);
  }
  stopGame() {
    clearInterval(this.gameInterval);
  }
  ngOnInit() {
  }

}
