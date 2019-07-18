import { Injectable } from '@angular/core';

import { Article } from '../model/article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ArticleService {

  baseURL = 'http://localhost:8081/apsidiscountweb/api';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(`${this.baseURL}/articles`,this.httpOptions);
  }

  public getArticleById(id: number): Observable<Article>{
    return this.http.get<Article>(`${this.baseURL}/article/${id}`,this.httpOptions);
  }

  public getArticlesAvecStock(nb: number): Observable<Article[]>{
    return this.getAllArticles().pipe(
      map(
        articles => articles.filter(
          article => article.stock >= nb
        )
      )
    );
  }

  public deleteArticle(id: number): Observable<Article>{
    return this.http.delete<Article>(`${this.baseURL}/article/${id}`,this.httpOptions);
  }
}
