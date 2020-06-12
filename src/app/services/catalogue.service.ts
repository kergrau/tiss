import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) { }

  getCatalogues(id) {
    return this.http.get<any[]>('https://api.tissini.app/api/v2/categories/'+ id +'/products');
  }
}
