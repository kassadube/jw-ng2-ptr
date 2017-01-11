import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from "../environments/environment";

@Injectable()
export class DataService {

  list = [];

  constructor(private http: Http) { }

  getData() {
    return this.list;
  }

  getDataObservable(): Observable<any> {
    return this.http.get(environment.dataUrl)
      .map(response => response.json());
  }

}
