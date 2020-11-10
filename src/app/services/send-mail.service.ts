import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

export class User {}
@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http: HttpClient) { }

  sendMail(form: any): any {
    console.log(form.email + form.subject);
    const body = {
      subject: form.subject, name: form.name, email: form.email,
      phone: form.phone, message: form.message
    };
    return this.http.post(`${environment.apiUrl}/email`, body);
  }
}
