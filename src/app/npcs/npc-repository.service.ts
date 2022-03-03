import { Injectable } from '@angular/core';
import { INpc } from './interfaces/npc-details';

@Injectable({
  providedIn: 'root'
})
export class NpcRepositoryService {

  constructor() { }

  getNpcs(): INpc[] {
    return [
      {id: 1, name: "Guy", profession: "bank teller", isAlly: true},
      {id: 2, name: "Arms Up Man", profession: "unemployed", isAlly: true},
      {id: 3, name: "Hot Girl", profession: "car salesperson", isAlly: false}
    ]
  }
}
