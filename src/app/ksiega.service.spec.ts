import { TestBed, inject } from '@angular/core/testing';

import { KsiegaService } from './ksiega.service';

describe('KsiegaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KsiegaService]
    });
  });

  it('should be created', inject([KsiegaService], (service: KsiegaService) => {
    expect(service).toBeTruthy();
  }));
});
