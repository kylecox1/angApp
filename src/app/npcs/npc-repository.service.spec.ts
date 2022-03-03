import { TestBed } from '@angular/core/testing';

import { NpcRepositoryService } from './npc-repository.service';

describe('NpcRepositoryService', () => {
  let service: NpcRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpcRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
