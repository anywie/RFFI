import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MediaService {

  constructor(private http: HttpClient) { }

  getAllVideos(): any {
    return this.http.get(`${environment.apiUrl}/medis`).pipe(map(res => res));
  }
}
