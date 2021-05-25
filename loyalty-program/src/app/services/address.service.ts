import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class AddressService {

  constructor(
    private http: HttpClient
  ) {}

  public registerAddress(body: any) {
    const urlToRequest = `${ Endpoints.urlBase }/address`;
    return this.http.post(urlToRequest, body);
  }

  public getAdresses() {
    const urlToRequest = `${ Endpoints.urlBase }/address`;
    return this.http.get(urlToRequest);
  }
}
