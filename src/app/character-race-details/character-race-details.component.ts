import { Component, Input, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-character-race-details',
  templateUrl: './character-race-details.component.html',
  styleUrls: ['./character-race-details.component.css']
})
export class CharacterRaceDetailsComponent implements OnInit {
  @Input() name = "unknown";

  title: string = "Character Race Details";
  characterRaceDetails: any;
  
  
  constructor(private repo : RepositoryService) { }

  ngOnInit(): void {
    this.repo.getRaceDetails(this.name)
    .subscribe((response) => {this.characterRaceDetails = response});
  }
}
