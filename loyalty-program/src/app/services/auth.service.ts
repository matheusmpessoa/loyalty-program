import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user!: any;

  constructor(
    private http: HttpClient
  ) {}

  public registerUser(body: any) {
    const urlToRequest = `${ Endpoints.urlBase }/users`;
    return this.http.post(urlToRequest, body);
  }

  public getUsers() {
    const urlToRequest = `${ Endpoints.urlBase }/users`;
    return this.http.get(urlToRequest);
  }

  public setUser(loggedUser: any) {
    this.user = loggedUser;
  }

}
