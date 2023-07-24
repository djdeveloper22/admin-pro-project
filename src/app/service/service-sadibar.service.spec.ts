import { TestBed } from '@angular/core/testing';

import { ServiceSadibarService } from './service-sadibar.service';

describe('ServiceSadibarService', () => {
  let service: ServiceSadibarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSadibarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
