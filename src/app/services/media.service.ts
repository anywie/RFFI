import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MediaService {

  constructor(private http: HttpClient) { }

  getAllVideos() {
    return this.http.get(`${environment.apiUrl}/ms`).pipe(map(res => res));
  }
}
