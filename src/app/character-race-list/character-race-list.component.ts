import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-character-race-list',
  templateUrl: './character-race-list.component.html',
  styleUrls: ['./character-race-list.component.css']
})
export class CharacterRaceListComponent implements OnInit {

  title: string = "Character Races";
  characterRaces: any;
  speed: number = 0;

  constructor(private repo : RepositoryService) { }

  ngOnInit(): void {
    this.repo.getCharacterRaces().subscribe(
      (response) => {this.characterRaces = response;}
    );
  }

}
