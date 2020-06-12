import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any[]>('https://api.tissini.app/api/v2/categories');
  }

  getSections() {
    return this.http.get<any[]>('https://api.tissini.app/api/v1/categories/sections');
  }
}
