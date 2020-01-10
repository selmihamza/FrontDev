import { TestBed } from '@angular/core/testing';

import { ServiceProjetService } from './service-projet.service';

describe('ServiceProjetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceProjetService = TestBed.get(ServiceProjetService);
    expect(service).toBeTruthy();
  });
});
