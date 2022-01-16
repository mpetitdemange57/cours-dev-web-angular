import { TestBed } from '@angular/core/testing';

import { WhySoSeriousService } from './why-so-serious.service';

describe('WhySoSeriousService', () => {
  let service: WhySoSeriousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhySoSeriousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
