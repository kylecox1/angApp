import { Component, Input, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { IClass } from '../interfaces/IClass';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  index: string = "n/a";

  classDetails: any;

  constructor(private repo : RepositoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['index'];
    this.classDetails = this.repo.getClassDetails(this.index);
  }

}
