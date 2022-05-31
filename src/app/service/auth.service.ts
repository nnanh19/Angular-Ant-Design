import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISignUp } from '../model/SignUp';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
    ) { }

  createUser(data : ISignUp): Observable<ISignUp>{
    const user = this.http.post<ISignUp>('http://localhost:3000/register', data)
    return user
  }
}
