import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assoicate } from '../Store/Models/AssociateModel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssocaiateService {
  apiurl: string = 'http://127.0.0.1:8000/'
  constructor(private http: HttpClient) { }
  addAssociate(data:Assoicate):Observable<Assoicate> {
    return this.http.post<Assoicate>(`${this.apiurl}associates`, data)
  }
  getAssociates(): Observable<any> {
    return this.http.get<Assoicate[]>(`${this.apiurl}associates`)
  }
}

