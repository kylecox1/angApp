import { Injectable } from '@angular/core';
import { IBossMonster } from './interfaces/boss-monster';

@Injectable({
  providedIn: 'root'
})
export class BossRepositoryService {

  constructor() { }

  getBossMonsters(): IBossMonster[] {
    return [
      {id: 1, name: "Boothstomper", healthPoints: 300, weakness: "fire"},
      {id: 2, name: "Drogfisher", healthPoints: 250, weakness: "arrows"},
      {id: 3, name: "Pirhannanoob", healthPoints: 120, weakness: "dryland"}
    ]
  }
}
