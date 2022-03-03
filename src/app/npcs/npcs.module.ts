import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpcComponent } from './npc/npc.component';



@NgModule({
  declarations: [
    NpcComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NpcComponent
  ]
})
export class NpcsModule { }
