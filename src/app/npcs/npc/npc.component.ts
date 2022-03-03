import { Component, OnInit } from '@angular/core';
import { INpc } from '../interfaces/npc-details';
import { NpcRepositoryService } from '../npc-repository.service';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {
  npc: INpc[] = [];

  constructor(private npcRepo: NpcRepositoryService) { }

  ngOnInit(): void {
    this.npc = this.npcRepo.getNpcs();
  }

}
