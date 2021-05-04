import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from 'src/Models/BookModel';
@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http:HttpClient) { }

  getDataFromApi() : Observable<BookModel[]>{
      return this.http.get<BookModel[]>("https://localhost:5001/api/books")
  }
  
}
