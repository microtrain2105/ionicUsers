import { Injectable } from '@angular/core';
// 1. Import HttpHeaders, this will allow us to POST JSON data
import { HttpClient, HttpHeaders } from '@angular/common/http';

// 2. Import Observable 
import { Observable } from 'rxjs';

// 3. Import User
import { User } from './user.model';

// 2. Create a JSON header
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // 3. Add URL as an instance variable
    private url: string;

    constructor(private http: HttpClient) {
      let l = window.location;
      let host:string;
      //Are we running under Ionic or in a production environment?
      if(l.port >= '8100'){
        host = 'localhost:3000';
      }else{
        host = l.hostname + ((l.port.length>0)?':' + l.port:'');
      }
  
      this.url = `${l.protocol}//${host}/api/auth/`;
    }
  
    register(user: User): Observable<User>{
      return this.http.post<User>(this.url + 'register', user, httpOptions);
    }
  
    login(user: User): Observable<User>{
      return this.http.post<User>(this.url + 'login', user, httpOptions);
    }
  
    logout(): Observable<User>{
      return this.http.delete<User>(this.url + 'logout');
    }
}