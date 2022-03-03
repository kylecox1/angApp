import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements OnInit {
  @Input() name = "Unknown"
  constructor() { }

  showSpoiler: boolean = false;
  buttonText: string = "Show";

  toggleSpoiler(): void {
    this.showSpoiler = !this.showSpoiler;
    if (this.showSpoiler) {
      this.buttonText = "Hide";
    } else {
      this.buttonText = "Show";
    }
  }


  ngOnInit(): void {
  }

}
