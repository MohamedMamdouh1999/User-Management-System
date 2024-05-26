import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  apiClient: string = "https://dummyjson.com/";

  constructor(private httpClient: HttpClient) { }

  get<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(`${this.apiClient}${endpoint}`);
  }

  post<T>(endpoint: string, data: T): Observable<T> {
    return this.httpClient.post<T>(`${this.apiClient}${endpoint}`, data);
  }
}
