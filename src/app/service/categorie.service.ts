import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';

@Injectable()
export class CategorieService {

    baseURL = 'http://localhost:8081/apsidiscountweb/api';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {}

    public getCategories(): Observable<Categorie[]> {
        return this.http.get<Categorie[]>(`${this.baseURL}/categories`, this.httpOptions);
    }
}