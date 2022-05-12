import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {

  constructor(private _HttpClient:HttpClient) { }


  register(user:any) : Observable <any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup" , user);
  }
}
