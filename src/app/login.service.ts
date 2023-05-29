import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public getData(pageNumber: number, pageSize: number) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/photos?_start=${pageNumber}&_limit=${pageSize}`);
  }
}
