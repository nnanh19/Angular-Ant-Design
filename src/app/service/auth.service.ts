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

  signUp(data : ISignUp): Observable<ISignUp>{
    const user = this.http.post<ISignUp>('http://localhost:3000/register', data)
    return user
  }
  signIn(data : any): Observable<any>{
    const user = this.http.post<any>('http://localhost:3000/signin',data);
    return user
  }
}
