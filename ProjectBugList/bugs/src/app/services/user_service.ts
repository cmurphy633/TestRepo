import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from 'app/model/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  user: User[];

  getAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/bugs/users');
  }

}
