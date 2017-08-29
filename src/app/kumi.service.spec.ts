import { TestBed, inject } from '@angular/core/testing';

import { KumiService } from './kumi.service';

describe('KumiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KumiService]
    });
  });

  it('should be created', inject([KumiService], (service: KumiService) => {
    expect(service).toBeTruthy();
  }));
});
