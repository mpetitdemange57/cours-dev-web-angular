import { TestBed } from '@angular/core/testing';

import { ListPersonnelService } from './list-personnel.service';

describe('ListPersonnelService', () => {
  let service: ListPersonnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPersonnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
