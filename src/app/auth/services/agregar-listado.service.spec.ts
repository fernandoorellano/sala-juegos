import { TestBed } from '@angular/core/testing';
import { AgregarListadoService } from './agregar-listado.service';
 

describe('AgregarListadoService', () => {
  let service: AgregarListadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarListadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
