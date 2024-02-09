import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGuarGuard } from './auth-guar.guard';

describe('authGuarGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuarGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
