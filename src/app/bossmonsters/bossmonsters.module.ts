import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BosslistComponent } from './bosslist/bosslist.component';
import { DealiestBossComponent } from './dealiest-boss/dealiest-boss.component';



@NgModule({
  declarations: [
    BosslistComponent,
    DealiestBossComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BosslistComponent
  ]
})
export class BossmonstersModule { }
