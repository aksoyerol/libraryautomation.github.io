import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorModel } from 'src/Models/AuthorModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {}

  deleteEntity(id: Number) {
    return this.http.delete('https://localhost:5001/api/authors/' + id);
  }

  addEntity(model: AuthorModel) {
    const headerss = new Headers({ 'content-type': 'application/json' });
    const body = JSON.stringify(model);
    console.log(body);
    return this.http.post('https://localhost:5001/api/authors/', body,{
      headers : { 'content-type': 'application/json' }
    });
  }

  updateEntity(AuthorModel : AuthorModel){
    const headerss = new Headers({ 'content-type': 'application/json' });
    const body = JSON.stringify(AuthorModel);
    console.log(body);
    return this.http.put("https://localhost:5001/api/authors/",body,{
      headers : { 'content-type': 'application/json' }
    });
  }

  getEntity(id : Number){
    return this.http.get<AuthorModel>('https://localhost:5001/api/books/getAuthorById/' + id);
  }

  getAuthors() : Observable<AuthorModel[]>{
    return this.http.get<AuthorModel[]>("https://localhost:5001/api/authors")
  }
}
