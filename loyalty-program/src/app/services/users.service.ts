import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register.model';
import { Endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) {}

  public registerUser(body: any) {
      const urlToRequest = `${ Endpoints.urlBase }/users`;
      return this.http.post(urlToRequest, body);
  }
}

