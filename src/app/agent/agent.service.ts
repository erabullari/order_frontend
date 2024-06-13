import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environments} from "../../environments";
import {Observable} from "rxjs";

const baseUrl = 'http://localhost:8000/users';

@Injectable({ providedIn: 'root' })
export class AgentService {

  USERS_ENDPOINT = `${environments.API_HOST}/users/`

  constructor(private httpClient: HttpClient) {
  }


  getAllUsers(): Observable<any> {

    return this.httpClient.get(this.USERS_ENDPOINT);
  }

  getSingleUserById(id: string) {
    return this.httpClient.get<any>(`${baseUrl}/${id}`);
  }

  createUser(params: any) {
    return this.httpClient.post(baseUrl, params);
  }

  updateUser(id: number, params: any): Observable<any> {
    return this.httpClient.put(`${this.USERS_ENDPOINT}${id}`, params);
  }
  deleteUser(id: number): Observable<any> {
    if (!id) { // Ensure id is not undefined
      throw new Error("User ID is undefined");
    }
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }

  getUserDetails(id: number, params: any): Observable<any> {
    return this.httpClient.get<any>(`${this.USERS_ENDPOINT}${id}`, params);
  }
}

