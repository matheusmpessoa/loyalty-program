/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { AddressService } from './address.service';

describe('Service: Address', () => {
  let service: AddressService;

  const mock_http = jasmine.createSpyObj('http', ['post', 'get']);

  beforeEach(() => {
    service = new AddressService(
      mock_http
    );

    TestBed.configureTestingModule({
      providers: [AddressService]
    });
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  describe('registerAddress', () => {
    it('#registerAddress', () => {
      let body = {
        id: 11,
        name: 'Home',
        zipCode: '11199-410',
        city: 'Santos',
        state: 'SP',
        street: 'Av Ana Costa 777',
        neighborhood: "Gonzaga",
        country: "Brasil",
        description: "House on the corner street"
      };

      service = new AddressService(mock_http);

      mock_http.post.and.returnValue(
        of({ body: { address: [] } })
      );

      service.registerAddress(body).subscribe((val) => {
        expect(val).toBeDefined();
      });
    });
  });

  describe('getAdresses', () => {
    it('#getAdresses', () => {
      service = new AddressService(mock_http);

      mock_http.get.and.returnValue(
        of({ body: { address: [] } })
      );

      service.getAdresses().subscribe((val) => {
        expect(val).toBeDefined();
      });
    });
  });

});
