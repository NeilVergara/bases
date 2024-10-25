import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Contadora: {{counter}}</h3>
  <button (click)="resetear()">Resetear</button>
  <button (click)="contadora(1)">+1</button>
  <button (click)="contadora(-1)">-1</button>
  <hr />

  `
})
export class CounterComponent{
  public counter: number = 10;

  contadora(value: number): void {
    this.counter += value;
  }

  resetear(): void{
    this.counter = 10;
  }
}







