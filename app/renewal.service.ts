import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RenewalService {

  private baseUrl='http://localhost:8080/api/renewal';
  constructor(private http: HttpClient) { }
  getRenewal(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
