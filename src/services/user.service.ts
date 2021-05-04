import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/Models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BaseURL = "https://localhost:5001/api/"
  constructor(private http: HttpClient) {
  }

  deleteEntity(id: Number) {
    return this.http.delete(this.BaseURL+'users/' + id);
  }

  addEntity(model: UserModel) {
    const body = JSON.stringify(model);
    console.log(body);
    return this.http.post(this.BaseURL + 'users', body,{
      headers : { 'content-type': 'application/json' }
    });
  }

  updateEntity(UserModel : UserModel){
    const body = JSON.stringify(UserModel);
    console.log(body);
    return this.http.put(this.BaseURL + "users/",body,{
      headers : { 'content-type': 'application/json' }
    });
  }

  getAllEntity() : Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.BaseURL + 'users/');
  }

  getEntity(id : Number){
    return this.http.get<UserModel>(this.BaseURL + 'users/GetById/' + id);
  }

}
