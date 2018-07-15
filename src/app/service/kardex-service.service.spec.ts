import { TestBed, inject } from '@angular/core/testing';

import { KardexServiceService } from './kardex-service.service';

describe('KardexServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KardexServiceService]
    });
  });

  it('should be created', inject([KardexServiceService], (service: KardexServiceService) => {
    expect(service).toBeTruthy();
  }));
});
