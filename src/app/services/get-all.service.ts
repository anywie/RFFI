import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  constructor(private http: HttpClient) { }

  getAllSchools() {
    return this.http.get(`${environment.apiUrl}/schools`).pipe(map(res => res));
  }

  getAllAuthors() {
    return this.http.get(`${environment.apiUrl}/authors`).pipe(map(res => res));
  }

  getAuthors(contentId) {
    return this.http.get(`${environment.apiUrl}/authors/${contentId}`).pipe(map(res => res));
  }
}
