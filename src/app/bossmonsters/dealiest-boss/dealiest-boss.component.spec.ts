import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealiestBossComponent } from './dealiest-boss.component';

describe('DealiestBossComponent', () => {
  let component: DealiestBossComponent;
  let fixture: ComponentFixture<DealiestBossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealiestBossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealiestBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
