import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ListeArticlesComponent } from '../liste-articles/liste-articles.component';
import { ArticleService } from '../service/article.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { PanierService } from '../service/panier.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  providers: [ListeArticlesComponent]
})
export class PanierComponent implements OnInit {


  listeArticles: Article[];
  idClient: number;
  subscription: Subscription;

  constructor(private articleService: ArticleService, private panierService: PanierService, private appComponent: AppComponent, private router: Router) {
  }

  ngOnInit() {
    this.idClient = this.appComponent.idClient;
    if (this.idClient == null) {
      this.router.navigate(['accueil']);
    }
    this.subscription = this.articleService.getArticlesByIdClient(this.idClient)
      .subscribe(
        articles => this.listeArticles = articles
      );
  }

  deleteArticle(idArticle: number) {
    this.panierService.deleteArticleFromPanier(this.idClient, idArticle)
      .subscribe(
        article => this.ngOnInit(),
        err => console.log("Article inconnu")
      );
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
