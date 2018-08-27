import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Bug} from 'app/model/bug';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BugService {
  constructor(private http: HttpClient) {
  }

  bugs: Bug[];

  getAll(): Observable<Bug[]> {
    return this.http.get<Bug[]>('http://localhost:8080/bugs/bugs');
  }

}
