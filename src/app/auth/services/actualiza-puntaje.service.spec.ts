import { TestBed } from '@angular/core/testing';

import { ActualizaPuntajeService } from './actualiza-puntaje.service';

describe('ActualizaPuntajeService', () => {
  let service: ActualizaPuntajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizaPuntajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
