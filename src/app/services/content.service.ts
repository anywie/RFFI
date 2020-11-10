import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  async getAllContents(): Promise<any>{
    try {
      // tslint:disable-next-line:prefer-const
      let res = await this.http
        .get(`${environment.apiUrl}/contents`)
        .toPromise();
      return res;
    } catch (error) {}
    // return this.http.get(`${environment.apiUrl}/contents`).pipe(map(res => res));
  }

  getContent(contentId): any {
    return this.http.get(`${environment.apiUrl}/contents/${contentId}`).pipe(map(res => res));
  }
}
