import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRaceDetailsComponent } from './character-race-details.component';

describe('CharacterRaceDetailsComponent', () => {
  let component: CharacterRaceDetailsComponent;
  let fixture: ComponentFixture<CharacterRaceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterRaceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterRaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
