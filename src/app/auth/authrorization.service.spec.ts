import { TestBed } from '@angular/core/testing';

import { AuthrorizationService } from './authrorization.service';

describe('AuthrorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthrorizationService = TestBed.get(AuthrorizationService);
    expect(service).toBeTruthy();
  });
});
