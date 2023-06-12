import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpiredService {

  private baseUrl='http://localhost:8080/api/expired';
  constructor(private http: HttpClient) { }
  getExpired(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
