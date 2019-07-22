import { Injectable } from '@angular/core';

import { Article } from '../model/article';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ArticleService {

  private baseURL = 'http://localhost:8081/apsidiscountweb/api';
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  private _article = new Subject<Article[]>();
  

  constructor(private http: HttpClient) { }

  public getAllArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(`${this.baseURL}/allArticles`,this.httpOptions);
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

  public getArticlesByIdClient(id: number): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseURL}/articles/${id}`, this.httpOptions);
  }

  public getArticlesByCategorie(idCategorie: number): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseURL}/articlesByCategorie/${idCategorie}`, this.httpOptions);
  }

  public get article() {
    return this._article;
  }
  public set article(value) {
    this._article = value;
  }
}
