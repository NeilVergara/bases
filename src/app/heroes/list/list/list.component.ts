import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    public heroe_boorrado?: string;

    public heroNames: string[] =
    [
      'Spiderman', 'Vegetta', 'Goku', 'Iroman'
    ]

    borrarUltimoHeroe(): void{
      this.heroe_boorrado = this.heroNames.pop();
    }
}
