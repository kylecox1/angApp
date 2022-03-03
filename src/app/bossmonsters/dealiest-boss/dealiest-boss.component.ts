import { Component, OnInit } from '@angular/core';
import { BossRepositoryService } from '../boss-repository.service';
import { IBossMonster } from '../interfaces/boss-monster';

@Component({
  selector: 'app-dealiest-boss',
  templateUrl: './dealiest-boss.component.html',
  styleUrls: ['./dealiest-boss.component.css']
})
export class DealiestBossComponent implements OnInit {

  deadliestBoss: IBossMonster | undefined = undefined;

  constructor(private bossRepo: BossRepositoryService) { }

  ngOnInit(): void {
    this.deadliestBoss = this.bossRepo.getBossMonsters().reduce(
      function(pm,cm){return(pm.healthPoints > cm.healthPoints ? pm: cm)}
    )
  }
}
