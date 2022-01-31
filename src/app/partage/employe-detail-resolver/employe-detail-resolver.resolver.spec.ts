import { TestBed } from '@angular/core/testing';

import { EmployeDetailResolverResolver } from './employe-detail-resolver.resolver';

describe('EmployeDetailResolverResolver', () => {
  let resolver: EmployeDetailResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EmployeDetailResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
