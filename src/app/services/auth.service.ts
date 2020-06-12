import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(phone) {
    //const BaseUrl = 'https://api.tissini.app/api/v1/login/client';
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset=utf-8',
    'Content-Length': '28', 'Host': 'api.tissini.app'});
    
    const params = new URLSearchParams();
    params.append('mobilephone', phone);
    var pjson = `{"mobilephone":"${phone.replace(/[^\w\s]/gi, '')}"}`;
    //params.toString(), { headers: httpHeaders}
    return this.http.post<any>('https://api.tissini.app/api/v1/login/client', JSON.parse(pjson));
  }

  public getEntrepreneur() {
    if (localStorage.getItem('entrepreneur') != null) {
      return localStorage.getItem('entrepreneur');
    }
    return null;
  }

  savePerson(entrepreneur) {
    localStorage.setItem('entrepreneur', JSON.stringify(entrepreneur));
  }

  isAuthenticated(): boolean {
    const payload = JSON.parse(this.getEntrepreneur());
    if (payload != null && payload.email && payload.email.length > 3) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.clear();
    localStorage.removeItem('entrepreneur');
  }
}
