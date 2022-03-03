import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})
export class DungeonComponent implements OnInit {
  @Input() name = "Unknown"

  monsters: string[] = ["golbin","goul","spider"];
  treasureAmount: number = 5000;
  difficultyPercent: number = .45;

  constructor() { }

  ngOnInit(): void {
  }

}
