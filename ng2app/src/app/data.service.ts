import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  list = [];

  constructor(private http: Http) { }

  getData() {
    return this.list;
  }

  getDataObservable(): Observable<any> {
    return this.http.get('http://demo7959174.mockable.io/')
      .map(response => response.json());
  }

}
