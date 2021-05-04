import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorModel } from 'src/Models/AuthorModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {}

  getAuthors() : Observable<AuthorModel[]>{
    return this.http.get<AuthorModel[]>("https://localhost:5001/api/authors")
  }
}
