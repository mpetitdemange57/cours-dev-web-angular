import { TestBed } from '@angular/core/testing';

import { NomResolver } from './nom.resolver';

describe('NomResolver', () => {
  let resolver: NomResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NomResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
