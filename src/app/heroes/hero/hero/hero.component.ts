import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Iroman';
  public age: number = 45;
  public cambio_edad: boolean = true;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  get capitalizedDescription():string{
    return ` ${this.name.toUpperCase()} - ${this.age}`;
  }

  cambiarNombre(): void{
    this.name = "NEIL JOSE";
  }

  cambiarEdad(): void{
    this.age = 28;
    this.cambio_edad = false;
  }

}
