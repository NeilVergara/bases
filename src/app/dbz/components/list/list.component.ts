import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: 'neil10',
    name: "Trunk",
    power: 10
  }]

  @Output()
  public onDelete = new EventEmitter<string>();

  onDeleteCharacter(id: string ): void{
    this.onDelete.emit(id);
    console.log(id)
  }
 }
