import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  constructor(private http: HttpClient) { }

  getAllSchools(): any {
    return this.http.get(`${environment.apiUrl}/schools`).pipe(map(res => res));
  }

  // tslint:disable-next-line:ban-types
  // async getAllAuthors(): Promise<any> {
  //   try {
  //     // tslint:disable-next-line:prefer-const
  //     let res = await this.http
  //       .get(`${environment.apiUrl}/authors`)
  //       .toPromise();
  //     return res;
  //   } catch (error) {

  //   }
  // }

  getAuthor(contentId): any {
    return this.http.get(`${environment.apiUrl}/authors/${contentId}`).pipe(map(res => res));
  }

  getAllContents(): any {
    return this.http.get(`${environment.apiUrl}/contents`).pipe(map(res => res));
  }

  getAllAuthors(): any {
    return this.http.get(`${environment.apiUrl}/authors`).pipe(map(res => res));
  }
}
