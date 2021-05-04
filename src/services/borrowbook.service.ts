import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BorrowBookModel } from 'src/Models/BorrowBookModel';

type NewType = BorrowBookModel;

@Injectable({
  providedIn: 'root'
})
export class BorrowbookService {

  BaseURL = "https://localhost:5001/api/"
  constructor(private http: HttpClient) {
  }

  deleteEntity(id: Number) {
    return this.http.delete(this.BaseURL+'borrowbooks/' + id);
  }

  addEntity(model: BorrowBookModel) {
    const body = JSON.stringify(model);
    console.log(body);
    return this.http.post(this.BaseURL + 'borrowbooks', body,{
      headers : { 'content-type': 'application/json' }
    });
  }

  updateEntity(BorrowBookModel : NewType){
    const body = JSON.stringify(BorrowBookModel);
    console.log(body);
    return this.http.put(this.BaseURL + "borrowbooks/",body,{
      headers : { 'content-type': 'application/json' }
    });
  }

  getAllEntity() : Observable<BorrowBookModel[]>{
    return this.http.get<BorrowBookModel[]>(this.BaseURL + 'borrowbooks/');
  }

  getEntity(id : Number){
    return this.http.get<BorrowBookModel>(this.BaseURL + 'borrowbooks/GetById/' + id);
  }

}
