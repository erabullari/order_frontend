import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from "../../environments"; // Ensure this import path is correct
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AgentService {

  private readonly USERS_ENDPOINT = `${environments.API_HOST}/users`;

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(this.USERS_ENDPOINT);
  }

  getSingleUserById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.USERS_ENDPOINT}/${id}`);
  }

  createUser(params: any): Observable<any> {
    return this.httpClient.post(this.USERS_ENDPOINT, params);
  }

  deleteUser(id: number): Observable<any> {
    if (!id) { // Ensure id is not undefined
      throw new Error("User ID is undefined");
    }
    return this.httpClient.delete(`${this.USERS_ENDPOINT}/${id}`);
  }

  getUserDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.USERS_ENDPOINT}/${id}`);
  }

  updateUserDetails(id: number, userDetails: any): Observable<any> {
    return this.httpClient.put<any>(`${this.USERS_ENDPOINT}/${id}`, userDetails);
  }

}
