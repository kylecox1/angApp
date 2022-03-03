import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-story',
  templateUrl: './back-story.component.html',
  styleUrls: ['./back-story.component.css']
})
export class BackStoryComponent implements OnInit {

  constructor() { }
  homeTown: string = "Narnia";
  profession: string = "farmer";
  tragicEvent: string = "dead parents";
  lifeDream: string = "become king";
  sideKick: string = "Yonnie";
  costume: string = "tunic"
  weapon: string = "loose change"

  showStory: boolean = false;
  buttonText: string = "Show";

  // this method will show the story on trigger if not showing, hide it if it is
  toggleStory(): void {
    this.showStory = !this.showStory;
    if (this.showStory) {
      this.buttonText = "Hide";
    } else {
      this.buttonText = "Show";
    }
  }

  ngOnInit(): void {
  }

}
