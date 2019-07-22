import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/article';

@Injectable()
export class PanierService {

    baseURL = 'http://localhost:8081/apsidiscountweb/api';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }


    public addPanier(idClient: number, idArticle: number): Observable<Article> {

        return this.http.put<Article>(`${this.baseURL}/panier/client/${idClient}/article/${idArticle}`, this.httpOptions);
    }

    public deleteArticleFromPanier(idClient: number, idArticle: number): Observable<Article> {

        return this.http.delete<Article>(`${this.baseURL}/panier/client/${idClient}/article/${idArticle}`, this.httpOptions);
    }
}
