import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from 'src/Models/BookModel';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getDataFromApi(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>('https://localhost:5001/api/books');
  }

  deleteEntity(id: Number) {
    return this.http.delete('https://localhost:5001/api/books/' + id);
  }

  addEntity(model: BookModel) {
    const headerss = new Headers({ 'content-type': 'application/json' });
    const body = JSON.stringify(model);
    console.log(body);
    return this.http.post('https://localhost:5001/api/books/', body,{
      headers : { 'content-type': 'application/json' }
    });
  }
}
