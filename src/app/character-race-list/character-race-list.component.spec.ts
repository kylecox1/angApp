import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRaceListComponent } from './character-race-list.component';

describe('CharacterRaceListComponent', () => {
  let component: CharacterRaceListComponent;
  let fixture: ComponentFixture<CharacterRaceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterRaceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterRaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
