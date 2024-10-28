import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 1000
  }, {
    id: uuid(),
    name: "Goku",
    power: 9500
  }, {
    id: uuid(),
    name: "Vegeta",
    power: 7500
  }
];

onNewCharacter(character: Character):void{
  const { id, ...rest } = character;  // Extraemos `id` si existe, pero no lo usamos
  const newCharacter: Character = { id: uuid(), ...rest };
  this.characters.push(newCharacter);
  console.log(newCharacter)
}

onDeleteCharacterByID(id: string): void{
  this.characters = this.characters.filter(w=>w.id !== id);
}

  constructor() { }

}
