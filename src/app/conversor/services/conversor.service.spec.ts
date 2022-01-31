import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  let service: ConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(ConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
