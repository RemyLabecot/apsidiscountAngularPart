import { Component } from '@angular/core';
import { ClientService } from './service/client.service';
import { Subscription, Subject } from 'rxjs';
import { Categorie } from './model/categorie';
import { CategorieService } from './service/categorie.service';
import { Article } from './model/article';
import { ArticleService } from './service/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title = 'matInfo';
  private subscription: Subscription;

  private nomClient: string;
  private prenomClient: string;
  private _idClient: number;

  private categories: Categorie[];
  private updateListeArticles= new Subject<Article[]>();

  constructor(private clientService: ClientService, private categorieService: CategorieService, private articleService: ArticleService, private router: Router) {
    this.subscription = this.clientService.client
      .subscribe(
        client => {
          this.nomClient = client.nom
          this.prenomClient = client.prenom
          this.idClient = client.id
        }
      )

    this.categorieService.getCategories()
      .subscribe(
        categories => this.categories = categories
      );
  }

  ngOnInit() {
  }

  public afficherArticlesCategorie(idCategorie: number) {
    console.log(idCategorie);
    this.articleService.getArticlesByCategorie(idCategorie)
      .subscribe(
        articles => {
          this.articleService.article.next(articles)
        }
      );
  }

  public get idClient(): number {
    return this._idClient;
  }
  public set idClient(value: number) {
    this._idClient = value;
  }

  public updateListe() {
    this.articleService.getAllArticles()
      .subscribe(
        articles => {
          this.articleService.article.next(articles)
          console.log("oups")
        }
      );
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
