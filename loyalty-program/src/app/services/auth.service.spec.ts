import { TestBed, async, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from './auth.service';

describe('Service: Auth', () => {
  let service: AuthService;

  const mock_http = jasmine.createSpyObj('http', ['post', 'get']);

  beforeEach(() => {
    service = new AuthService(
      mock_http
    );

    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  describe('registerUser', () => {
    it('#registerUser', () => {
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

      service = new AuthService(mock_http);

      mock_http.post.and.returnValue(
        of({ body: { address: [] } })
      );

      service.registerUser(body).subscribe((val) => {
        expect(val).toBeDefined();
      });
    });
  });

  describe('getUsers', () => {
    it('#getUsers', () => {
      service = new AuthService(mock_http);

      mock_http.get.and.returnValue(
        of({ body: { address: [] } })
      );

      service.getUsers().subscribe((val) => {
        expect(val).toBeDefined();
      });
    });
  });

  describe('setUser', () => {
    it('#setUser', () => {
      service = new AuthService(mock_http);

      const loggedUser = {
        id: 1111,
        fullName: 'Matheus Pessoa',
        email: 'matheusmpessoa17@gmail.com',
        phone: '11929219128',
        password: 'matheus123'
      };

      service.setUser(loggedUser);
    });
  });

});
