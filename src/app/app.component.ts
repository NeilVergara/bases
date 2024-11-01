import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera App de Angular';
  public counter: number = 10;

  contadora(value: number): void {
    this.counter += value;
  }

  resetear(value: number): void{
    this.counter = value;
  }
}

