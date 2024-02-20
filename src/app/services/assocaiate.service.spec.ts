import { TestBed } from '@angular/core/testing';

import { AssocaiateService } from './assocaiate.service';

describe('AssocaiateService', () => {
  let service: AssocaiateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssocaiateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
