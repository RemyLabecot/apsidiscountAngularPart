import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ListeArticlesComponent } from '../liste-articles/liste-articles.component';
import { ArticleService } from '../service/article.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  providers: [ListeArticlesComponent]
})
export class PanierComponent implements OnInit {


  listeArticles: Article[];
  idClient: number;

  constructor(private articleService: ArticleService, private appComponent: AppComponent, private router: Router) {
   }

  ngOnInit() {
    this.idClient = this.appComponent.idClient;
    if (this.idClient == null) {
      this.router.navigate(['accueil']);
    }
    this.articleService.getArticlesByIdClient(this.idClient)
    .subscribe(
      articles => this.listeArticles = articles
    );
  }
}
